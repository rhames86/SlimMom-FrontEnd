import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://goit-final-project-gr-01-backend.onrender.com/api',
});
export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
