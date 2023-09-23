import axios, {AxiosRequestConfig} from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

console.log('Server:', baseURL);

const $host = axios.create({baseURL});

const $authHost = axios.create({baseURL});

$host.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

const authInterceptor = (config: AxiosRequestConfig) => {
  if (!config?.headers) return;

  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {$host, $authHost};
