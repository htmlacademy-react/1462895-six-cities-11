import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';

export const setCity = createAction('offers/setCity', (city: string) => ({
  payload: city,
}));

export const setSortType = createAction('offers/setSortType', (sortType: string) => ({
  payload: sortType,
}));

export const setOffersDataLoadingStatus = createAction(
  'data/setOffersDataLoadingStatus',
  (isOffersDataLoading: boolean) => ({
    payload: isOffersDataLoading,
  })
);

export const loadOffers = createAction('data/loadOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  })
);

export const redirectToRoute = createAction('router/redirectToRoute', (route: AppRoute) => ({
  payload: route,
}));
