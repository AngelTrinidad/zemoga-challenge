/**
 * Setup Axios instance with default values
 * @todo Move sensitive values(BASE_URL, API_VERSION) to env variables with {@link https://github.com/luggit/react-native-config}
 */

import axios, {AxiosRequestConfig} from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Build request
export const buildRequest = <R = unknown>(payload: AxiosRequestConfig) => {
  return axiosInstance.request<R>(payload);
};

// For mock request
export const setupMockInterceptor = () => {
  const mockInterceptor = new MockAdapter(axiosInstance);
  return mockInterceptor;
};

export const mockApiOnGet = (interceptor: MockAdapter, url: string) =>
  interceptor.onGet(`${BASE_URL}/${url}`);

export default axiosInstance;
