import { ProductCard } from '@/shared/ui/productCard/ProductCard';

import * as styled from './styled';


export const CatalogItem = ({ item, secondColor, name }) => (
  <styled.Wrapper>
    <styled.Title>{ item.name }</styled.Title>
    <styled.CardWrapper>
      { item.items.slice(0, 3).map((e) => (
        <ProductCard
          key={ e.id }
          name={ name }
          price={ `${e.price}₽` }
          secondColor={ secondColor }
          title={ e.name }
        />
      )) }
      { item.items.length > 3
        ? (
          <ProductCard
            key={ item.items[0].id }
            name=""
            price={ `3 из ${item.items.length}` }
            secondColor={ secondColor }
            title="Посмотреть всё"
          />
        ) : null }
    </styled.CardWrapper>
  </styled.Wrapper>
);
