import {configureWunderGraphOperations, EnvironmentVariable} from '@wundergraph/sdk';
import type { OperationsConfiguration } from './generated/wundergraph.operations';
import {resolveVariable} from "@wundergraph/sdk/dist/configure/variables";

const HAALCENTRAAL_PERSONEN_AUTHENTICATION_REQUIRED: boolean =
	resolveVariable(new EnvironmentVariable('OPERATIONS_HAALCENTRAAL_PERSONEN_AUTHENTICATION_REQUIRED','true')) === 'true'

export default configureWunderGraphOperations<OperationsConfiguration>({
	operations: {
		defaultConfig: {
			authentication: {
				required: true
			},
		},
		queries: (config) => ({
			...config,
			caching: {
				enable: false,
				staleWhileRevalidate: 60,
				maxAge: 60,
				public: true,
			},
			liveQuery: {
				enable: true,
				pollingIntervalSeconds: 1,
			},
		}),
		mutations: (config) => ({
			...config,
		}),
		subscriptions: (config) => ({
			...config,
		}),
		custom: {
			HaalcentraalPersonen: (config) => ({
				...config,
				authentication: {
					required: HAALCENTRAAL_PERSONEN_AUTHENTICATION_REQUIRED
				}
			})
		},
	},
});