import { useGate, useUnit } from 'effector-react';
import React from 'react';

import { Loader } from '@/loader';
import { ShopsList } from '@/features';

import { $shops, Gate } from './model';
import * as styled from './styled';


export const Shops = () => {
  useGate(Gate);
  const shops = useUnit($shops);
  return (
    <styled.GlobalWrapper>
      <styled.ShopsWrapper>
        { shops ? <ShopsList shops={ shops } /> : <Loader /> }
      </styled.ShopsWrapper>
    </styled.GlobalWrapper>
  );
};
