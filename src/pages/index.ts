import { createRoutesView } from 'atomic-router-react';

import { CatalogRoute } from '@/pages/shopCatalogPage/shopCatalog';

import { ShopsRoute } from './shopListPage/shopPage/index';


export const Pages = createRoutesView({
  routes: [ShopsRoute, CatalogRoute],
});
