import { createReducer } from '@reduxjs/toolkit';

import { setCity, setCurrentCityOffers } from './action';

import { offers } from '../mocks/offers';

import { defaultCity } from '../const';
import { filterOffersByCity } from '../utils';

const initialState = {
  city: defaultCity,
  offers,
  currentCityOffers: filterOffersByCity(defaultCity, offers),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCurrentCityOffers, (state, action) => {
      state.currentCityOffers = action.payload;
    });
});

export { reducer };
