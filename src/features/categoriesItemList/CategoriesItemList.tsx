import React from 'react';

import { CategoriesItem } from '@/entities';
import { Categories, Shop } from '@/shared';

import * as styled from './styled';


interface Props {
  shop: Shop;
  secondColor: string;
  setSelectedCategory: unknown;
  selectedCategory: unknown;
}

export const CategoriesItemList: React.FC<Props> = ({
  shop, secondColor, setSelectedCategory, selectedCategory
}) => (
  <styled.Wrapper>
    { Object.values(shop).length > 0 ? Object.values(shop.shop.categories).map((item: Categories) => (
      <CategoriesItem
        key={ item.id }
        item={ item }
        secondColor={ secondColor }
        selectedCategory={ selectedCategory }
        setSelectedCategory={ setSelectedCategory }
      />
    )) : null }
  </styled.Wrapper>
);
