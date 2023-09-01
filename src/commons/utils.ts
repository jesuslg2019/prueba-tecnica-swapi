import axios, { AxiosInstance } from 'axios';

export function createAxiosInstance(baseURL: string): AxiosInstance {
    const instance = axios.create({
        baseURL,
    });

    return instance;
}
