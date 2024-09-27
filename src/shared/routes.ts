import {
  createHistoryRouter, createRoute, createRouterControls
} from 'atomic-router';
import { createEvent, sample } from 'effector';
import { createBrowserHistory } from 'history';


export const routes = {
  shops: createRoute(),
  catalog: createRoute<{name: string}>(),
};
export const appStarted = createEvent();
export const controls = createRouterControls();

export const route = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: routes.shops,
    },
    {
      path: '/catalog/:name',
      route: routes.catalog,
    }
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: route.setHistory,
});
