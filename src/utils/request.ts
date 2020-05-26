import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const request: AxiosInstance = axios.create({
  baseURL: '',
  withCredentials: false,
});

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);

export { request };
