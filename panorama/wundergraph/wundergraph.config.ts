import {configureWunderGraphApplication, cors, EnvironmentVariable, templates} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';
import haalcentraal from "./operations/haalcentraal";
import {resolveVariable} from "@wundergraph/sdk/dist/configure/variables";

const SECURITY_ENABLE_GRAPHQL_ENDPOINT: boolean =
    resolveVariable(new EnvironmentVariable('SECURITY_ENABLE_GRAPHQL_ENDPOINT','false')) === 'true';
const AUTHENTICATION_TOKEN_JWKS_URL =
    new EnvironmentVariable('AUTHENTICATION_TOKEN_JWKS_URL');
const AUTHENTICATION_TOKEN_CACHE_TTL =
    Number(resolveVariable(new EnvironmentVariable('AUTHENTICATION_TOKEN_CACHE_TTL','60')));

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    apis: [haalcentraal],
    server,
    operations,
    generate: {
        codeGenerators: [
            {
                templates: [templates.typescript.client, templates.typescript.operations, templates.typescript.testing],
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
        tokenBased: {
            providers: [
                {
                    jwksURL: AUTHENTICATION_TOKEN_JWKS_URL,
                    userInfoCacheTtlSeconds: AUTHENTICATION_TOKEN_CACHE_TTL,
                }
            ]
        },
    },
    security: {
        enableGraphQLEndpoint: SECURITY_ENABLE_GRAPHQL_ENDPOINT,
    },
});