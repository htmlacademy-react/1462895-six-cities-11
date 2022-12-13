import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '../const';

export const redirectToRoute = createAction('router/redirectToRoute', (route: AppRoute) => ({
  payload: route,
}));
