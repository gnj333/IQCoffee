import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

import { getShops } from 'shared/api';


export const Gate = createGate();
Gate.open.watch(() => getShops());

export const $shops = createStore([]).on(getShops.doneData, (_, shops) => shops);
