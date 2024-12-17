import { createTestServer } from '../generated/testing';

const wg = createTestServer({});
beforeAll(() => wg.start());
afterAll(() => wg.stop());

describe('Test Dragons API', () => {
	it('dragons', async () => {
		const result = await wg.client().query({
			operationName: 'spacex/Dragons',
		});
		expect(result.data?.spacex_dragons?.length).toBe(2);
	});
});