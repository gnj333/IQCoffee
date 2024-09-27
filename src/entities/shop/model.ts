import { restore, sample } from 'effector';

import { getShop } from '@/shared/api';
import { routes } from '@/shared/routes';


export const $shop = restore(getShop.doneData, null);

sample({
  clock: routes.catalog.opened,
  fn: ({ params }) => ({ name: params.name }),
  target: getShop
});
