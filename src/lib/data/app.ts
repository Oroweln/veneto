/**
 * Mobile app links. Fill these in when the app is published; until then the
 * buttons lead to the download section, which says the app is coming soon.
 */
export const APP_LINKS = {
	/** Custom scheme or universal link that opens the installed app, e.g. 'zoemilano://open'. */
	deepLink: '',
	/** App Store page. */
	ios: '',
	/** Google Play page. */
	android: ''
};

export const appPublished = () => Boolean(APP_LINKS.ios || APP_LINKS.android);

/** The store for this device, if the app is published there. */
export function storeLink(userAgent: string): string {
	if (/iphone|ipad|ipod/i.test(userAgent)) return APP_LINKS.ios;
	if (/android/i.test(userAgent)) return APP_LINKS.android;
	return '';
}
