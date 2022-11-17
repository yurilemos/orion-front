import axios from 'axios';

/* URL da API */
export const API_URL =
  process.env.REACT_APP_API_URL || 'https://orion-api-v1.herokuapp.com';

/* URL da API local (usada para casos de teste */
export const API_URL2 = 'http://127.0.0.1:5050';

/* Definição de todas as chamadas da api, para simplicicação de código 
(não ter que sempre passar o url e o token) */
export const api = {
  main: axios.create({
    baseURL: API_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
  users: axios.create({
    baseURL: process.env.REACT_APP_URL_API_USUARIOS,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
};

api.main.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  config.headers.Authorization = `Bearer ${await localStorage.getItem(
    'token'
  )}`;
  return config;
});

api.main.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data.msg === 'Token has expired') {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);
