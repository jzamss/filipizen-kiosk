import { writable } from 'svelte/store';

export const fetchGroups = async () => {
	const res = await fetch('/api/queue/groups');
	const data = await res.json();
	if (res.ok) {
		return data.groups;
	} else {
		throw new Error(data.message);
	}
};

function createStore() {
	const store = writable({
		groups: [],
		group: {},
		section: {},
		error: null
	});

	const { subscribe, update } = store;

	return {
		subscribe: subscribe,

		setGroups: (groups) => update((draft) => ({ ...draft, groups })),

		setGroup: async (groupid) => {
			if (groupid) {
				update((draft) => {
					const group = draft.groups.find(
						(group) => group.objid.toLowerCase() === groupid.toLowerCase()
					);
					return { ...draft, group };
				});
			}
		},

		setSection: (section) => update((draft) => ({ ...draft, section })),

		setError: (error) => update((draft) => ({ ...draft, error }))
	};
}

const store = createStore();

store.fetchGroups = async () => {
	const res = await fetch('/api/queue/groups');
	const data = await res.json();
	if (res.ok) {
		store.setGroups(data.groups);
	} else {
		store.setError(data.message);
	}
};

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
