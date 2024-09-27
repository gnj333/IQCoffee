
import { Icons } from '@/shared/ui/icon/Icon';

import * as styled from './styled';


export const CategoriesItem = ({
  item, secondColor, setSelectedCategory, selectedCategory
}) => (
  <styled.ItemWrapper
    href="#"
    id={ item.category }
    secondColor={ secondColor }
    selectedCategory={ selectedCategory }
    onClick={ () => setSelectedCategory(`${item.category}`) }
  >
    <Icons color={ secondColor } name={ item.category } />
    { item.name }
  </styled.ItemWrapper>
);
