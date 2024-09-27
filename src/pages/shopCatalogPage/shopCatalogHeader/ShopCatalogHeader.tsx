import { useUnit } from 'effector-react';

import { getShop } from '@/shared/api';

import * as styled from './styled';


export const ShopCatalogHeader = ({ shop }) => {
  const isLoading = useUnit(getShop.pending);
  return (
    <styled.Wrapper
      mainColor={ !isLoading ? shop.shop.stylebook.mainColor : 'black' }
      opacity={ !isLoading ? shop.shop.stylebook.opacity : '1' }
      pattern={ !isLoading ? shop.shop.stylebook.pattern : '' }
    >
      <styled.Title>Что желаете?</styled.Title>
      <styled.ImgWrapper>
        <styled.Img alt="" src="/assets/images/004-superhero-1.svg" />
      </styled.ImgWrapper>
    </styled.Wrapper>
  );
};
