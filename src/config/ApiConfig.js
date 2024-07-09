import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});
export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
