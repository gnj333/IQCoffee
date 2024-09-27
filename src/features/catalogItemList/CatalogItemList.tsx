
import { CatalogItem } from '@/entities';
import { Lists } from '@/shared';
import { Title } from '@/entities/catalogItem/styled';


export const CatalogItemList = ({ selected, secondColor, name }) => (
  <>
    { selected ? selected.map((item: Lists) => (
      <CatalogItem key={ item.id } item={ item } name={ name } secondColor={ secondColor } />
    )) : <Title>В настоящий момент нет доступных продуктов</Title> }
  </>
);
