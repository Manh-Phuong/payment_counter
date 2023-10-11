import axios from 'axios';
import { createAuthHeader } from '../../utils/createAuthHeader';

const request = axios.create({
    baseURL: 'http://localhost:8080/admin'
});

export const createBalance = async (data, token) => {
    const headers = createAuthHeader(token);
    try {
        const response = await request.post(`balances`,
            data,
            {
                headers: headers
            });

        return response.data;
    } catch (error) {
        return error;
    }
};