import { createReducer } from '@reduxjs/toolkit';

import { setCity } from './action';

import { offers } from '../mocks/offers';

import { defaultCity } from '../const';

const initialState = {
  city: defaultCity,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
