import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction('offers/setCity', (city: string) => ({
  payload: city,
}));

export const setSortType = createAction('offers/setSortType', (sortType: string) => ({
  payload: sortType,
}));
