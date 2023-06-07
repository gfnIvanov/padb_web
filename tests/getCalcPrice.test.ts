import { expect, test } from '@jest/globals';
import { getCalcPrice } from '../src/utils/getCalcPrice';

test('Check get-calc-price', async () => {
    const data = await getCalcPrice();
    expect(data).toBeDefined();
    expect(data).not.toBeInstanceOf(Error);
});
