import { writable } from 'svelte/store';

const initialData = {
	mode: 'queue',
	error: null,
	entity: {}
};

const createStore = () => {
	const store = writable(initialData);
	const { subscribe, update, set } = store;
	return {
		subscribe,
		update,
		set
	};
};

const store = createStore();

store.init = () => {
	store.update((_) => ({ ...initialData, entity: {} }));
};

store.getBilling = async (param) => {
	store.update((e) => ({ ...e, processing: true, error: null }));
	try {
		param.qtr = param.qtr || 4;
		const res = await fetch('/api/bpls/bill', {
			method: 'POST',
			body: JSON.stringify(param),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const entity = await res.json();
		if (entity.status === 'ERROR') {
			store.update((e) => {
				return { ...e, error: entity.msg, processing: false };
			});
		} else {
			entity.refno = param.bin;
			entity.billtoqtr = Number(entity.billtoqtr);
			store.update((e) => {
				return { ...e, entity, mode: 'bill', error: null, processing: false };
			});
		}
	} catch (error) {
		store.update((e) => ({ ...e, error, processing: false }));
	}
};

store.createPaymentOrder = async (bill) => {
	store.update((e) => ({ ...e, processing: true, error: null }));
	try {
		const res = await fetch('/api/bpls/po', {
			method: 'POST',
			body: JSON.stringify(bill),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const entity = await res.json();
		if (entity.status === 'ERROR') {
			store.update((e) => {
				return { ...e, error: entity.msg, processing: false };
			});
		} else {
			store.update((e) => {
				return { ...e, po: entity, mode: 'queue', error: null, processing: false };
			});
		}
	} catch (error) {
		store.update((e) => ({ ...e, error, processing: false }));
	}
};

store.setMode = (mode) => {
	store.update((e) => ({ ...e, mode }));
};

export default store;
