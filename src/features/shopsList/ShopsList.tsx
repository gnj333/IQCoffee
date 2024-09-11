import { useUnit } from 'effector-react';

import { itemTypes } from 'shared/types';

import { $shops } from '../../widgets/model';
import { ShopsItem } from '../../entities/shopsItem/ShopsItem';
import * as styled from './styled';


export const ShopsList = () => {
  const shops = useUnit($shops);
  return (
    <styled.cardsWrapper>
      { shops.map((item: itemTypes) => <ShopsItem key={ item.categories[0].id } item={ item } />) }
    </styled.cardsWrapper>
  );
};
