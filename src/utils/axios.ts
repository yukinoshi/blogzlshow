//配置axios
import axios from 'axios';
import { baseUrl } from './env.ts';
import { YkMessage } from '../components/yike-design-ui';

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 请求超时时间
});

service.interceptors.request.use(
  (config) => {
    // 跨域
    config.withCredentials = true;
    const token = JSON.parse(localStorage.getItem('user') || '{}').token;
    // 如果有token，则在请求头中添加Authorization字段
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    YkMessage({type:'warning',message: error.message});
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      YkMessage({type:'warning',message: '请求发送异常'});
      return Promise.reject(new Error('请求发送异常'));
    }
  },
  (error) => {
    // 对请求错误做些什么
    YkMessage({type:'warning',message: error.message});
    return Promise.reject(error);
  }
);

export default service;