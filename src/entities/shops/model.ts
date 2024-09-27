import { restore, sample } from 'effector';

import { getShops } from '@/shared/api';
import { routes } from '@/shared/routes';


export const $shops = restore(getShops.doneData, null);


sample({
  clock: routes.shops.opened,
  target: getShops
});
