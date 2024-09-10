import {
  createEvent, createStore, restore, sample
} from 'effector';
import { createGate } from 'effector-react';

import { getShops } from 'shared/api';


export const Gate = createGate();

export const $shops = restore(getShops.doneData, null);

sample({
  clock: Gate.open,
  target: getShops
});
