import {introspect} from "@wundergraph/sdk";

const spaceX = introspect.graphql({
    apiNamespace: 'spacex',
    url: 'https://spacex-api.fly.dev/graphql/',
});

export default spaceX;