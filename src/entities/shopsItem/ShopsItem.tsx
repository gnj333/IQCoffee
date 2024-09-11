import React from 'react';

import { ShopsItemProps } from 'shared/types';

import * as styled from './styled';


export const ShopsItem: React.FC<ShopsItemProps> = ({ item, key }) => (
  <styled.cardWrapper
    mainColor={ item.stylebook.mainColor }
    opacity={ item.stylebook.opacity }
    pattern={ item.stylebook.pattern }
    secondColor={ item.stylebook.secondColor }
  >
    <styled.titlesWrapper>
      <styled.cardTitle>{ item.name }</styled.cardTitle>
      <styled.cardSubTitle>{ item.address }</styled.cardSubTitle>
    </styled.titlesWrapper>
    <styled.arrow alt="dfdf" src="/assets/images/angle-down.svg" />

  </styled.cardWrapper>
);
