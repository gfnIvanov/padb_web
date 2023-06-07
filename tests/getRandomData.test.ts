import { expect, test } from '@jest/globals';
import { getRandomData } from '../src/utils/getRandomData';

test('Check get-random-data', async () => {
    const data = await getRandomData();
    expect(data).toBeDefined();
    expect(data).not.toBeInstanceOf(Error);
});
