import { createReducer } from '@reduxjs/toolkit';

import { setCity, setSortType } from './action';

import { offers } from '../mocks/offers';

import { defaultCity, defaultSortType } from '../const';

const initialState = {
  city: defaultCity,
  sortType: defaultSortType,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export { reducer };
