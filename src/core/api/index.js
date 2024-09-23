import axios from 'axios';
import { URL_API } from '../constants/api';

const apiConfig = {
  baseURL: URL_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: false,
};

export const api = axios.create(apiConfig);
