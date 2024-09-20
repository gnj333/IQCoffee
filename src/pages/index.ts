import { createRoutesView } from 'atomic-router-react';

import { ShopsRoute } from './shopListPage/shopPage/index';


export const Pages = createRoutesView({
  routes: [ShopsRoute],
});
