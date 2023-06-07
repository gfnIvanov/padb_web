import axios from 'axios';
import type { TestData } from '@/types';

export async function getRandomData(): Promise<TestData | Error> {
    try {
        const response = await axios.get(
            'http://127.0.0.1:9100/get-random-data',
        );
        if (response.status !== 200) throw new Error(response.statusText);
        return response.data;
    } catch (e) {
        console.error('Ошибка при запросе данных (get-random-data)', e);
        return new Error();
    }
}
