import React from 'react';

import { itemTypes, Shops } from '@/shared';
import { ShopsItem } from '@/entities';

import * as styled from './styled';


export const ShopsList: React.FC<Shops> = ({ shops }) => (
  <styled.CardsWrapper>
    { shops.map((item: itemTypes, i) => (
      <ShopsItem
        key={ item.slug }
        item={ item }
      />
    )) }
  </styled.CardsWrapper>
);
