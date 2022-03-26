const host = 'localhost:8070';
const module = 'etracs25';
const url = `http://${host}/osiris3/json/${module}`;

export const get = async () => {
	try {
		const res = await fetch(`${url}/QueueGroupService.getGroupsWithSections`);

		const data = await res.json();
		if (res.ok) {
			return {
				body: {
					groups: data
				}
			};
		}
		throw new Error('Server error.');
	} catch (error) {
		console.log('error', error);
		return {
			status: 500,
			body: {
				message: 'Server is currently not available. Please try again.'
			}
		};
	}
};
