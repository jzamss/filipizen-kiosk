import { writable } from 'svelte/store';

const initialData = {
	mode: 'init',
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

store.getBilling = async (tdno) => {
	store.update((e) => ({ ...e, processing: true }));
	try {
		const res = await fetch('/api/bpls/bill', {
			method: 'POST',
			body: JSON.stringify({ tdno }),
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
				return { ...e, entity, mode: 'bill', error: null, processing: false };
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
