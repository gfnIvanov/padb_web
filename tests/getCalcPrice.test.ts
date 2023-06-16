import axios, { AxiosError } from 'axios';
import { expect, test } from '@jest/globals';
import { getCalcPrice } from '../src/utils/getCalcPrice';
import { TestData } from '@/types';

test('Check calc-price', async () => {
    try {
        await axios.post('http://127.0.0.1:5000/calc-price');
        const data = await getCalcPrice({} as TestData);
        expect(data).toBeDefined();
        expect(data).toBe(typeof data === 'number');
    } catch (e) {
        if (e instanceof AxiosError && e.code === 'ECONNREFUSED') {
            expect(getCalcPrice({} as TestData)).rejects.toThrow(
                'Удаленный сервер недоступен!',
            );
        }
    }
});
