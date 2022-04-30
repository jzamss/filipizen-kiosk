import { writable, get } from 'svelte/store';

function createStore() {
	const store = writable({
		groups: [],
		group: { sections: [] },
		section: {},
		error: null
	});

	const { subscribe, update, set } = store;

	return {
		subscribe,
		update,
		set
	};
}

const store = createStore();

store.fetchGroups = async () => {
	try {
		const res = await fetch('/api/queue/groups');
		const data = await res.json();
		if (res.ok) {
			store.update((draft) => ({ ...draft, groups: data.groups }));
			return data.groups;
		} else {
			store.update((draft) => ({ ...draft, error: data.message }));
			return data.message;
		}
	} catch (error) {
		store.update((_) => ({ error: 'Queue server error encountered. Please try again.' }));
	}
};

store.setGroups = (groups) => store.update((draft) => ({ ...draft, groups }));

store.setGroup = async (groupid) => {
	if (groupid) {
		let groups = get(store).groups;
		if (!groups || groups.length === 0) {
			groups = await store.fetchGroups();
		}
		store.update((draft) => {
			const group = groups.find((group) => group.objid.toLowerCase() === groupid.toLowerCase());
			return { ...draft, groups, group };
		});
	}
};

store.setSection = (section) => store.update((draft) => ({ ...draft, section }));

store.setError = (error) => store.update((draft) => ({ ...draft, error }));

store.generateNextTicket = async (section) => {
	const res = await fetch('/api/queue/ticket', {
		method: 'POST',
		body: JSON.stringify(section),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await res.json();
	if (res.ok) {
		section.ticket = data.ticket;
		store.setSection(section);
	} else {
		store.setError(data.message);
	}
};

export default store;
