import { useGate, useUnit } from 'effector-react';

import { ShopPage } from '../pages/shopListPage/shopPage/ShopPage';
import { $shops, Gate } from './model';


export const Shops = () => {
  useGate(Gate);
  const shops = useUnit($shops);
  console.log(shops);
  return (
    <ShopPage />
  );
};
