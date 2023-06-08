import axios, { AxiosError } from 'axios';
import { expect, test } from '@jest/globals';
import { getRandomData } from '../src/utils/getRandomData';

test('Check get-random-data', async () => {
    try {
        await axios.get('http://127.0.0.1:9100/get-random-data');
        const data = await getRandomData();
        expect(data).toBeDefined();
    } catch (e) {
        if (e instanceof AxiosError && e.code === 'ECONNREFUSED') {
            expect(getRandomData()).rejects.toThrow(
                'Удаленный сервер недоступен!',
            );
        }
    }
});
