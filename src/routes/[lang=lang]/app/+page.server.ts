import QRCode from 'qrcode';
import type { PageServerLoad } from './$types';

/** QR code for desktop visitors: it opens this page on a phone, which then sends them to the app or the store. */
export const load: PageServerLoad = async ({ url, params }) => {
	const target = `${url.origin}/${params.lang}/app?open=1`;
	const qr = await QRCode.toString(target, {
		type: 'svg',
		margin: 0,
		errorCorrectionLevel: 'M',
		color: { dark: '#241a17', light: '#00000000' }
	});
	return { qr, target };
};
