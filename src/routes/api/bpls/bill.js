import { appServerUrl } from '$lib/settings.js';

export const post = async ({ request }) => {
	const param = await request.json();
	try {
		const res = await fetch(
			`${appServerUrl}/gdx/OnlineBusinessBillingService.getBilling?refno=${param.bin}&qtr=${param.qtr}`
		);
		const data = await res.json();
		if (res.ok && data.status !== 'ERROR') {
			return {
				body: data.info
			};
		} else {
			return {
				body: data
			};
		}
	} catch (error) {
		console.log('error', error);
		return {
			status: 500,
			body: {
				message: 'Server problem encountered. Please try again.'
			}
		};
	}
};
