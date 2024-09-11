import { useGate, useUnit } from 'effector-react';

import * as styled from './styled';
import { $shops, Gate } from './model';
import { ShopsHeader } from '../pages/shopListPage/shopsHeader/ShopsHeader';
import { ShopsList } from '../features/shopsList/ShopsList';
import { Loader } from '../loader/loader';
import { Footer } from '../pages/shopListPage/footer/footer';


export const Shops = () => {
  useGate(Gate);
  const shops = useUnit($shops);
  return (
    <styled.globalWrapper>
      <ShopsHeader />
      <styled.shopsWrapper>
        { shops ? <ShopsList /> : <Loader /> }
      </styled.shopsWrapper>
      <Footer />
    </styled.globalWrapper>
  );
};
