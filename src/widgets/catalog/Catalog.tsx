import { useUnit } from 'effector-react';
import React, { useMemo, useState } from 'react';

import { getShop } from '@/shared/api';
import { CategoriesItemList, CatalogItemList } from '@/features';
import { Loader } from '@/shared';
import { $shop } from '@/entities/shop/model';


export const Catalog = () => {
  const shop = useUnit($shop);
  const isLoading = useUnit(getShop.pending);
  const [selectedCategory, setSelectedCategory] = useState('breakfast');
  const selected = useMemo(() => {
    if (!shop) return null;
    return shop.categories?.[selectedCategory]?.lists || null;
  }, [selectedCategory, shop]);
  if (isLoading) return <Loader />;
  if (!shop) return <div>Ничего не найдено</div>;
  return (
    <>
      <CategoriesItemList
        secondColor={ shop.shop.stylebook.secondColor }
        selectedCategory={ selectedCategory }
        setSelectedCategory={ setSelectedCategory }
        shop={ shop }
      />


      <CatalogItemList
        name={ shop.categories.drinks.category }
        secondColor={ shop.shop.stylebook.secondColor }
        selected={ selected }
      />
      { isLoading ? <Loader /> : null }
    </>
  );
};
