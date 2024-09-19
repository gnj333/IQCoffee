import { useGate, useUnit } from 'effector-react';
import React from 'react';

import { getShops, Loader } from '@/shared';
import { ShopsList } from '@/features';

import { $shops, Gate } from './model';
import * as styled from './styled';


export const Shops = () => {
  useGate(Gate);
  const shops = useUnit($shops);
  const isLoading = useUnit(getShops.pending);
  return (
    <styled.GlobalWrapper>
      <styled.ShopsWrapper>
        { shops && !isLoading && shops.length > 0 ? <ShopsList shops={ shops } /> : null }
        { isLoading ? <Loader /> : null }
      </styled.ShopsWrapper>
    </styled.GlobalWrapper>
  );
};
