import axios from 'axios';
import { createEffect } from 'effector';


export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getShops = createEffect(async () => {
  const response = await instance.get('shops');
  return response.data;
});
