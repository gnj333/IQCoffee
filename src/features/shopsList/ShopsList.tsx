import React from 'react';

import { ShopItem, Shops } from '@/shared';
import { ShopsItem } from '@/entities';

import * as styled from './styled';


export const ShopsList: React.FC<Shops> = ({ shops }) => (
  <styled.CardsWrapper>
    { shops.map((item: ShopItem) => (
      <ShopsItem
        key={ item.slug }
        item={ item }
      />
    )) }
  </styled.CardsWrapper>
);
