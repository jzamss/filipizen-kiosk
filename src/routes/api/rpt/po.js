import { appServerUrl } from '$lib/settings.js';

export const post = async ({ request }) => {
	const bill = await request.json();
	const po = {
		typeid: 'RPT',
		connection: 'default',
		refno: bill.refno,
		paidby: bill.ledger.taxpayer.name,
		paidbyaddress: bill.ledger.taxpayer.address,
		amount: bill.totals.total,
		params: {
			billid: bill.billid,
			billtoqtr: bill.billtoqtr,
			billtoyear: bill.billtoyear
		}
	};
	try {
		const res = await fetch(`${appServerUrl}/gdx/OnlineLandTaxBillingService.createPaymentOrder`, {
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
