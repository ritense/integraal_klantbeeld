import {authProviders, configureWunderGraphApplication, cors, templates} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';
import spaceX from "./operations/spaceX";

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    apis: [spaceX],
    server,
    operations,
    generate: {
        codeGenerators: [
            {
                templates: [templates.typescript.client, templates.typescript.testing],
                path: '../src/generated',
            },
        ],
    },
    cors: {
        ...cors.allowAll,
        allowedOrigins: process.env.NODE_ENV === 'production' ? ['https://*'] : ['http://*'],
        /**
         * Please configure CORS carefully to make sure that your users are protected.
         * Allowing all origins is usually the worst possible configuration.
         *
         * @docs https://docs.wundergraph.com/docs/wundergraph-config-ts-reference/configure-cors
         */
        // allowedOrigins: process.env.NODE_ENV === 'production' ? ['http://your.app'] : ['http://localhost:3000'],
    },
    authentication: {
        cookieBased: {
            providers: [authProviders.demo()],
            authorizedRedirectUriRegexes: ['http://localhost:5000'],
        },
    },
    security: {
        enableGraphQLEndpoint: process.env.NODE_ENV !== 'production',
    },
});