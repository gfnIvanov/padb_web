import axios, { AxiosError } from 'axios';
import type { TestData } from '@/types';

export async function getRandomData(): Promise<TestData> {
    try {
        const response = await axios.get(
            'http://127.0.0.1:9100/get-random-data',
        );
        if (response.status !== 200) throw new Error(response.statusText);
        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            if (e.code === 'ECONNREFUSED') {
                throw new Error('Удаленный сервер недоступен!');
            } else {
                throw new Error(
                    'Ошибка при запросе данных (get-random-data): ' + e.message,
                );
            }
        } else {
            throw new Error(
                'Ошибка при запросе данных (get-random-data): ' + e,
            );
        }
    }
}
