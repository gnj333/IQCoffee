import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ShopsItemProps } from '@/shared';

import * as styled from './styled';


export const ShopsItem: React.FC<ShopsItemProps> = ({
  item, key
}) => {
  const [isOpen, setIsOpen] = useState('');
  return (
    <styled.CardWrapper
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
        onClick={ () => (item.slug === isOpen ? setIsOpen('') : setIsOpen(item.slug)) }
      />
      { isOpen ? (
        <CSSTransition
          unmountOnExit
          in={ isOpen }
          timeout={ 500 }
        >
          <styled.OpenCardWrapper opacity={ item.stylebook.opacity } pattern={ item.stylebook.pattern }>
            <styled.OpenShopCard>
              <styled.ItemsWrapper>
                <styled.ShopCardItem>
                  <styled.ShopCardIcons src="/assets/images/coffee-cup.svg" />
                  <styled.ShopCardTitle>Напитки</styled.ShopCardTitle>
                </styled.ShopCardItem>
                <styled.ShopCardItem>
                  <styled.ShopCardIcons src="/assets/images/cake.svg" />
                  <styled.ShopCardTitle>Еда</styled.ShopCardTitle>
                </styled.ShopCardItem>
                <styled.ShopCardItem>
                  <styled.ShopCardIcons src="/assets/images/coffee-bean.svg" />
                  <styled.ShopCardTitle>Зерно</styled.ShopCardTitle>
                </styled.ShopCardItem>
                <styled.ShopCardItem>
                  <styled.ShopCardIcons src="/assets/images/kettle.svg" />
                  <styled.ShopCardTitle>Аксессуары</styled.ShopCardTitle>
                </styled.ShopCardItem>
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
          </styled.OpenCardWrapper>
        </CSSTransition>
      ) : null }
    </styled.CardWrapper>
  );
};
