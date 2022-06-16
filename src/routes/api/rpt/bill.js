import { appServerUrl } from '$lib/settings.js';

export const post = async ({ request }) => {
	console.log('appServerUrl', appServerUrl);

	const faas = await request.json();
	try {
		const res = await fetch(
			`${appServerUrl}/gdx/OnlineLandTaxBillingService.getBilling?refno=${faas.tdno}`
		);
		const data = await res.json();
		if (res.ok && data.status !== 'ERROR') {
			const bill = getBill(data.info);
			return {
				body: bill
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

const getPropertyType = (type) => {
	const types = {
		land: 'Land',
		bldg: 'Building',
		mach: 'Machinery',
		planttree: 'Plant/Tree',
		misc: 'Miscellaneous'
	};
	return types[type];
};

const getBill = (info) => {
	return {
		ledger: {
			tdno: info.tdno,
			fullpin: info.fullpin,
			owner: info.owner,
			titleno: info.titleno || '',
			classification: info.classification,
			cadastrallotno: info.cadastrallotno || '',
			totalmv: info.totalmv,
			totalav: info.totalav,
			totalareaha: info.totalareaha,
			totalareasqm: info.totalareaha * 10000,
			lguname: info.lguname,
			barangay: info.barangay,
			rputype: getPropertyType(info.rputype),
			taxpayer: info.taxpayer
		},
		tdno: info.tdno,
		billtoyear: info.billtoyear,
		billtoqtr: info.billtoqtr,
		totals: info.totals,
		billdate: info.billdate,
		billto: info.billto,
		barcode: info.billno,
		billperiod: info.billperiod,
		validuntil: info.validuntil
	};
};
