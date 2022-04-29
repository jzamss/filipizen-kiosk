const host = 'localhost:8070';
const module = 'etracs25';
const url = `http://${host}/osiris3/json/${module}`;

export const post = async ({ request }) => {
	const faas = await request.json();
	try {
		const res = await fetch(`${url}/RPTBillingService.generateBillByTdNo?tdno=${faas.tdno}`);
		const data = await res.json();
		if (res.ok && data.status !== 'ERROR') {
			const ledger = data.ledgers[0];
			const bill = getBill({ data, ledger });
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

const getPeriod = (ledger) => {
	if (ledger.fromyear === ledger.toyear && ledger.fromqtr === ledger.toqtr) {
		return ledger.fromyear;
	}
	if (ledger.fromyear === ledger.toyear && ledger.fromqtr != ledger.toqtr) {
		return `${ledger.fromqtr}Q, ${ledger.fromyear} - ${ledger.toqtr}Q, ${ledger.toyear}`;
	}
	if (ledger.fromqtr === 1 && ledger.toqtr === 4) {
		return `${ledger.fromyear} - ${ledger.toyear}`;
	}
	return `${ledger.fromqtr}Q, ${ledger.fromyear} - ${ledger.toqtr}Q, ${ledger.toyear}`;
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

const getBill = ({ data, ledger }) => {
	const billperiod = getPeriod(ledger);
	return {
		ledger: {
			tdno: ledger.tdno,
			fullpin: ledger.fullpin,
			owner: ledger.owner,
			titleno: ledger.titleno || '',
			classification: ledger.classification,
			cadastrallotno: ledger.cadastrallotno || '',
			totalmv: ledger.totalmv,
			totalav: ledger.totalav,
			totalareaha: ledger.totalareaha,
			totalareasqm: ledger.totalareaha * 10000,
			lguname: ledger.lguname,
			barangay: ledger.barangay,
			rputype: getPropertyType(ledger.rputype),
			taxpayer: ledger.taxpayer
		},
		tdno: ledger.tdno,
		billtoyear: data.billtoyear,
		billtoqtr: data.billtoqtr,
		totals: data.totals,
		billdate: data.billdate,
		billto: data.billto,
		barcode: data.barcode,
		billperiod: billperiod,
		validuntil: data.validuntil
	};
};
