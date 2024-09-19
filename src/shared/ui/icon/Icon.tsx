import React from 'react';

import { ReactComponent as Accessories } from './iconsImages/accessories.svg';
import { ReactComponent as Beans } from './iconsImages/beans.svg';
import { ReactComponent as Food } from './iconsImages/food.svg';
import { ReactComponent as Drinks } from './iconsImages/drinks.svg';
import { ReactComponent as Breakfast } from './iconsImages/breakfast.svg';
import * as styled from './styled';


const icons = {
  breakfast: Breakfast,
  drinks: Drinks,
  food: Food,
  beans: Beans,
  accessories: Accessories
};

interface Props {
  name: string;
  color: string;
}


export const Icons: React.FC<Props> = ({
  name, color,
}) => {
  if (!icons?.[name]) return null;

  const Icon = icons[name];
  return (
    <styled.IconWrapper color={ color }>
      <Icon name={ name } />
    </styled.IconWrapper>
  );
};
