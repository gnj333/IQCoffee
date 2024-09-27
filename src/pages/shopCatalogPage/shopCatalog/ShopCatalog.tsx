import { useUnit } from 'effector-react';

import { Footer } from '@/shared';
import { Catalog } from '@/widgets/catalog/Catalog';
import { ShopCatalogHeader } from '@/pages/shopCatalogPage/shopCatalogHeader/ShopCatalogHeader';
import { $shop } from '@/entities/shop/model';


export const ShopCatalog = () => {
  const shop = useUnit($shop);
  return (
    <>
      <ShopCatalogHeader shop={ shop } />
      <Catalog />
      <Footer />
    </>
  );
};
