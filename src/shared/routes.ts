import {
  createHistoryRouter, createRoute, createRouterControls
} from 'atomic-router';
import { createEvent, sample } from 'effector';
import { createBrowserHistory } from 'history';


export const routes = {
  shops: createRoute(),
};

export const appStarted = createEvent();

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: routes.shops,
    }
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
