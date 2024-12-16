import { configureWunderGraphServer } from '@wundergraph/sdk/server';

export default configureWunderGraphServer(() => ({
	listen: {
		port: 9001
	},
	hooks: {
		queries: {},
		mutations: {},
	},
	graphqlServers: [],
}));