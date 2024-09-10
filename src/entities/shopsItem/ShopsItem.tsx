import { useUnit } from 'effector-react';
import React from 'react';

import { ShopsItemProps } from 'shared/types';

import * as styled from './styled';


export const ShopsItem: React.FC<ShopsItemProps> = ({ item, key }) => {
  console.log(item);
  return (
    <styled.cardWrapper>
      <styled.titlesWrapper>
        <styled.cardTitle>{ item.name }</styled.cardTitle>
        <styled.cardSubTitle>{ item.address }</styled.cardSubTitle>
      </styled.titlesWrapper>
    </styled.cardWrapper>
  );
};
