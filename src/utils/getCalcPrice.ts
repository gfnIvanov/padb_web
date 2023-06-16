import { TestData } from '@/types';
import axios, { AxiosError } from 'axios';

export async function getCalcPrice(data: TestData): Promise<number> {
    try {
        const response = await axios.post(
            'http://127.0.0.1:5000/calc-price',
            data,
        );
        if (response.status !== 200) throw new Error(response.statusText);
        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            if (e.code === 'ECONNREFUSED') {
                throw new Error('Удаленный сервер недоступен!');
            } else {
                throw new Error(
                    'Ошибка при запросе данных (calc-price): ' + e.message,
                );
            }
        } else {
            throw new Error('Ошибка при запросе данных (calc-price): ' + e);
        }
    }
}
