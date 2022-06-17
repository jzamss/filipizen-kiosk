import { appServerUrl } from '$lib/settings.js';

export const post = async ({ request }) => {
	const bill = await request.json();
	const po = {
		typeid: 'BPLS',
		connection: 'default',
		refno: bill.appno,
		paidby: bill.ownername,
		paidbyaddress: bill.address,
		amount: bill.amount,
		params: {
			qtr: bill.billtoqtr || 4
		}
	};
	try {
		const res = await fetch(`${appServerUrl}/gdx/OnlineBusinessBillingService.createPaymentOrder`, {
			method: 'POST',
			'Content-Type': 'application/json',
			body: JSON.stringify(po)
		});
		const data = await res.json();
		if (res.ok && data.status !== 'ERROR') {
			return {
				body: data
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
