import { appServerUrl } from '$lib/settings.js';

export const post = async ({ request }) => {
	const section = await request.json();

	try {
		const res = await fetch(
			`${appServerUrl}/QueueService.generateNextNumber?sectionid=${section.objid}`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				body: {
					ticket: data
				}
			};
		}
		throw new Error('Server error.');
	} catch (error) {
		console.log('error', error);
		return {
			status: 500,
			body: {
				message: 'Server was not able to generate ticket. Please try again.'
			}
		};
	}
};
