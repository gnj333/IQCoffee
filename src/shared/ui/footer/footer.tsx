
import { Link } from 'atomic-router-react';

import { routes } from '@/shared/routes';

import * as styled from './styled';


export const Footer = () => (
  <styled.Wrapper>
    <styled.Element>
      <styled.Img alt="sdsd" src="/assets/images/garden.svg" />
      <h2>IQ-Coffee</h2>
    </styled.Element>
    <Link to={ routes.shops }>
      <styled.Element>
        { routes.catalog.$isOpened.stateRef.current ? <styled.OpenIcon src="/assets/images/radio--active.svg" /> : null }
        <styled.Img alt="sdsd" src="/assets/images/map-marker.svg" />
        <h2>Кофейни</h2>
      </styled.Element>
    </Link>
    <styled.Element>
      <styled.Img alt="yyyy" src="/assets/images/ticket.svg" />
      <h2>К оплате</h2>
    </styled.Element>
  </styled.Wrapper>
);
