import React, { useState } from 'react';

import { ShopsItemProps } from '@/shared';
import { Icons } from '@/shared/ui/icon/Icon';
import { Button } from '@/shared/ui/shopsButton/ShopsButton';

import * as styled from './styled';


export const ShopsItem: React.FC<ShopsItemProps> = ({
  item
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <styled.CardWrapper
      className="SHOP-ITEM"
      mainColor={ item.stylebook.mainColor }
      opacity={ item.stylebook.opacity }
      open={ isOpen }
      pattern={ item.stylebook.pattern }
      secondColor={ item.stylebook.secondColor }
    >
      <styled.TitlesWrapper open={ isOpen }>
        <styled.CardTitle>{ item.name }</styled.CardTitle>
        <styled.CardSubTitle>{ item.address }</styled.CardSubTitle>
      </styled.TitlesWrapper>
      <styled.Arrow
        alt="dfdf"
        open={ isOpen }
        src="/assets/images/angle-down.svg"
        onClick={ () => (setIsOpen(!isOpen)) }
      />
      <styled.OpenCardWrapper isOpen={ isOpen } opacity={ item.stylebook.opacity } pattern={ item.stylebook.pattern }>
        <styled.OpenShopCard>
          <styled.ItemsWrapper>
            { item.categories.map((categories) => (
              <styled.ShopCardItem key={ categories.id }>
                <Icons color={ item.stylebook.secondColor } name={ categories.category } />
                <styled.ShopCardTitle>{ categories.name }</styled.ShopCardTitle>
              </styled.ShopCardItem>
            )) }
            <styled.NewMenu>
              <styled.NewMenuIcon src="/assets/images/menu.svg" />
              <styled.NewMenuButton secondColor={ item.stylebook.secondColor }>new</styled.NewMenuButton>
            </styled.NewMenu>
          </styled.ItemsWrapper>
          <styled.WorkTimeWrapper>
            <styled.Days>Пн-Пт</styled.Days>
            <styled.Line src="/assets/images/Rectangle 148.png" />
            <styled.WorkTime>{ item.mode.weekday.start } - { item.mode.weekday.end }</styled.WorkTime>
          </styled.WorkTimeWrapper>
          <styled.WorkTimeWrapper>
            <styled.Days>Сб-Вс</styled.Days>
            <styled.Line src="/assets/images/Rectangle 148.png" />
            <styled.WorkTime>{ item.mode.free.start } - { item.mode.free.end }</styled.WorkTime>
          </styled.WorkTimeWrapper>
        </styled.OpenShopCard>
        <styled.PhotosBlock>
          <styled.PhotosTitle>Фотографии <br /> заведения</styled.PhotosTitle>
          <styled.PhotosWrapper>
            { item.photos.map((e) => (
              <styled.Photo key={ e.id } src={ e.src } />
            )) }
          </styled.PhotosWrapper>
        </styled.PhotosBlock>
        <Button secondColor={ item.stylebook.secondColor } />
      </styled.OpenCardWrapper>
    </styled.CardWrapper>
  );
};
