import {EnvironmentVariable, introspect} from "@wundergraph/sdk";
import {resolveVariable} from "@wundergraph/sdk/dist/configure/variables";

const haalcentraal = introspect.openApiV2({
    apiNamespace: 'haalcentraal',
    source: {
        kind: 'file',
        filePath: './specifications/haalcentraal_brp_personen_2.3.0.openapi.yaml',
    },
    baseURL: 'http://localhost:5010/haalcentraal/api/brp',
    headers: (builder) => {
        const HAALCENTRAAL_TOKEN = resolveVariable(new EnvironmentVariable('HAALCENTRAAL_BRP_TOKEN', 'CHANGE ME'));

        builder
            .addStaticHeader("Authorization", HAALCENTRAAL_TOKEN)
            .addClientRequestHeader("Content-Type", "application/json")
            // enabling this one causes outound requests to fail because the api doesn't comply with its own spec
            // .addClientRequestHeader("Accept","application/problem+json")

        return builder
    }
});

export default haalcentraal;