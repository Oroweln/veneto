import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { emailConfig, validateEmailConfig } from '$lib/config.server.js';
import { CONTACT_EMAIL, isReason } from '$lib/data/contact';
import { translate } from '$lib/i18n';
import type { Actions } from './$types';

const LIMITS = { name: 120, organisation: 160, email: 200, phone: 40, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const get = (k: string) => String(form.get(k) ?? '').trim();

		const values = {
			reason: get('reason'),
			name: get('name').slice(0, LIMITS.name),
			organisation: get('organisation').slice(0, LIMITS.organisation),
			email: get('email').slice(0, LIMITS.email),
			phone: get('phone').slice(0, LIMITS.phone),
			message: get('message').slice(0, LIMITS.message)
		};

		// Spam trap: real visitors never fill the hidden field.
		if (get('website')) return { sent: true };

		const errors: Record<string, true> = {};
		if (!isReason(values.reason)) errors.reason = true;
		if (!values.name) errors.name = true;
		if (!EMAIL_RE.test(values.email)) errors.email = true;
		if (values.message.length < 10) errors.message = true;
		if (form.get('consent') !== 'on') errors.consent = true;
		if (Object.keys(errors).length) return fail(400, { values, errors });

		// Until SMTP is configured, tell the visitor to write directly.
		try {
			validateEmailConfig();
		} catch {
			return fail(503, { values, unavailable: true });
		}

		const reason = translate('en', `contactPage.reasons.${values.reason}`);
		const text = [
			`Reason: ${reason}`,
			`Name: ${values.name}`,
			`Organisation: ${values.organisation || '-'}`,
			`Email: ${values.email}`,
			`Phone: ${values.phone || '-'}`,
			'',
			values.message
		].join('\n');

		try {
			const transport = nodemailer.createTransport(emailConfig.smtp);
			await transport.sendMail({
				from: emailConfig.from || emailConfig.smtp.auth.user,
				to: emailConfig.to || CONTACT_EMAIL,
				replyTo: values.email,
				subject: `[Veneto.app] ${reason}: ${values.name}`,
				text
			});
		} catch (err) {
			console.error('Contact form: sending failed', err);
			return fail(502, { values, unavailable: true });
		}
		return { sent: true };
	}
};
