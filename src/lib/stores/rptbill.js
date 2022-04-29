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
	try {
		const res = await fetch('/api/rpt/bill', {
			method: 'POST',
			body: JSON.stringify({ tdno }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const entity = await res.json();
		if (entity.status === 'ERROR') {
			store.update((e) => {
				return { ...e, error: entity.msg };
			});
		} else {
			store.update((e) => {
				return { ...e, entity, mode: 'bill', error: null };
			});
		}
	} catch (error) {
		store.update((e) => ({ ...e, error }));
	}
};

store.setMode = (mode) => {
	store.update((e) => ({ ...e, mode }));
};

export default store;
