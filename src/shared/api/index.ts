import axios from 'axios';
import { createEffect } from 'effector';

import { Shop } from '@/shared';


export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getShops = createEffect(async () => {
  const response = await instance.get('shops');
  return response.data;
});

export const getShop = createEffect<{name: string}, Shop >(async ({ name }: {name: string}) => {
  const response = await instance.get(`catalog/${name}`);
  return response.data;
});
