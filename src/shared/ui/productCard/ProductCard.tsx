import { Icons } from '@/shared/ui/icon/Icon';

import * as styled from './styled';


export const ProductCard = ({
  title, price, secondColor, name
}) => (
  <styled.Wrapper>
    <styled.Card>
      <Icons color={ secondColor } name={ name } />
      <styled.CardTitle>{ title }</styled.CardTitle>
    </styled.Card>
    <styled.CostWrapper>
      { price }
    </styled.CostWrapper>
  </styled.Wrapper>
);
