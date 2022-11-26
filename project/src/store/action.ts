import { createAction } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';

export const setCity = createAction('offers/setCity', (city: string) => ({
  payload: city,
}));

export const setCurrentCityOffers = createAction('offers/setCurrentCityOffers', (offers: Offer[]) => ({
  payload: offers,
}));
