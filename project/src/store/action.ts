import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction('offers/setCity', (city: string) => ({
  payload: city,
}));
