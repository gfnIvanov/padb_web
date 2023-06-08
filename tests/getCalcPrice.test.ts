import axios, { AxiosError } from 'axios';
import { expect, test } from '@jest/globals';
import { getCalcPrice } from '../src/utils/getCalcPrice';

test('Check get-calc-price', async () => {
    try {
        await axios.get('http://127.0.0.1:9100/get-calc-price');
        const data = await getCalcPrice();
        expect(data).toBeDefined();
        expect(data).toBe(typeof data === 'number');
    } catch (e) {
        if (e instanceof AxiosError && e.code === 'ECONNREFUSED') {
            expect(getCalcPrice()).rejects.toThrow(
                'Удаленный сервер недоступен!',
            );
        }
    }
});
