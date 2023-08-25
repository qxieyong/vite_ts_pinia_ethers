// src/axios.ts
import axios from 'axios';
import { computed } from 'vue';

//使用create方法创建axios实例
const service = axios.create({
  baseURL: '/chat',
  // timeout: 20000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    let configs: any = config;
    if (configs.url.includes('questionAnswer')) {
      configs.headers['Content-Type'] = 'multipart/form-data';
    } else {
      configs.headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    let token;
    configs.headers.token = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
// service.interceptors.response.use(
//   (response) => {
//     console.log('response', response);
//     let res = response.data || response;
//     // if (!res.code) {
//     //   res.code = response.status;
//     // }
//     if (res.code != 0 && res.code != 200) {
//       if (res.code === -14) {
//         //token过期的操作
//         // cacheStore.removeLocal('token');
//         return;
//       }
//       return Promise.reject(new Error(res.message || res.msg || 'Error'));
//     } else {
//       return res;
//     }
//   },
//   (error) => {
//     // console.log('err' + error); // 打印错误信息
//     return Promise.reject(error);
//   }
// );

export function axiosPost(url: string, params: any = {}) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then((response) => {
        resolve(response.data || response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function axiosGet(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    if (params) {
      service
        .get(url, { params })
        .then((response) => {
          resolve(response?.data || response);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      service
        .get(url)
        .then((response) => {
          resolve(response?.data || response);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

export default service;
