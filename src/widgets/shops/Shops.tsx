import { useUnit } from 'effector-react';
import React from 'react';

import { Loader } from '@/shared';
import { ShopsList } from '@/features';
import { getShops } from '@/shared/api';

import { $shops } from '../../entities/shops/model';
import * as styled from './styled';


export const Shops = () => {
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
