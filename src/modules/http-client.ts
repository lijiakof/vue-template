// http.js
import axios from 'axios';
import appConfig from './app-config';

const http = axios.create({
  baseURL: appConfig.urlApi, // 替换为你的 API 基地址
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = 'Bearer yourToken';
    return config;
  },
  error => {
    console.log('error');
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error');
    console.log(error);
    return Promise.reject(error);
  }
);

export default http;