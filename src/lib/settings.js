const host = import.meta.env.VITE_APP_HOST || process.env.APP_HOST || 'localhost:8070';
const module = import.meta.env.VITE_APP_MODULE || process.env.APP_MODULE || 'etracs25';

export const appServerUrl = `http://${host}/osiris3/json/${module}`;
