import { writable } from 'svelte/store';

const initialData = {
	mode: 'init',
	processing: false,
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
	store.update((_) => ({ ...initialData, entity: { ...initialData.entity } }));
};

store.getBilling = async (param) => {
	store.update((e) => ({ ...e, processing: true }));
	try {
		const res = await fetch('/api/rpt/bill', {
			method: 'POST',
			body: JSON.stringify(param),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const entity = await res.json();
		entity.refno = param.refno;

		if (entity.status === 'ERROR') {
			store.update((e) => {
				return { ...e, processing: false, error: entity.msg };
			});
		} else {
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
		const res = await fetch('/api/rpt/po', {
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
