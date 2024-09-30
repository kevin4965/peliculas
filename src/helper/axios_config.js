import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/', // O tu URL base correcta
  headers: {
    'Content-Type': 'application/json'
  }
});
