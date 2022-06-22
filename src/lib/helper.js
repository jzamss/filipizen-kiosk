const locale = 'en-PH';
export const numberFormat = (value, fraction = 2) => {
	const options = { minimumFractionDigits: fraction };
	return new Intl.NumberFormat(locale, options).format(value);
};

export const currencyFormat = (amount) => {
	const options = { style: 'currency', currency: 'PHP' };
	return new Intl.NumberFormat(locale, options).format(amount);
};

export const isEmpty = (value) => {
	return typeof value === undefined || typeof value === 'string'
		? value.trim().length === 0
		: !value;
};

export const dateFormat = (dt, options = { year: 'numeric', month: 'long', day: 'numeric' }) => {
	return new Intl.DateTimeFormat(locale, options).format(dt);
};

export const timeFormat = (
	dt,
	options = { hour: 'numeric', minute: 'numeric', second: 'numeric' }
) => {
	return new Intl.DateTimeFormat(locale, options).format(dt);
};

export const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min);

export const encodeParam = (param) => {
	return Object.keys(param)
		.reduce((arr, key) => {
			if (param.hasOwnProperty(key)) {
				arr.push(`${key}=${param[key]}`);
			} else {
				arr;
			}
			return arr;
		}, [])
		.join('&');
};
