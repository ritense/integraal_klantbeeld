import {afterAll, beforeAll, describe, expect, it} from "vitest"
import {createTestServer} from '../../wundergraph/generated/testing';
import {stop, upAll} from 'docker-compose'

const wg = createTestServer({});

beforeAll(async () => {
    await upAll()
    await wg.start()
})
afterAll(async () => {
    await wg.stop()
    await stop()
});

describe('Test Haalcentraal BRP Personne API', () => {

    it('should get all personen', async () => {

        const result = await wg.client().mutate({
            operationName: 'haalcentraal/personen',
            input: {
                "bsn": ["999990755", "999993653"],
                "fields": [
                    "burgerservicenummer",
                ]
            }
        });

        expect(result.error).toBe(undefined);
        expect(result.data.haalcentraal_Personen['personen']?.length).toBe(2);
    });

});