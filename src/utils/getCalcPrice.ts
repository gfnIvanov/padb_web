import axios from 'axios';

export async function getCalcPrice(): Promise<{ price: number } | Error> {
    try {
        const response = await axios.get(
            'http://127.0.0.1:9100/get-calc-price',
        );
        if (response.status !== 200) throw new Error(response.statusText);
        return response.data;
    } catch (e) {
        console.error('Ошибка при запросе данных (get-calc-price)', e);
        return new Error();
    }
}
