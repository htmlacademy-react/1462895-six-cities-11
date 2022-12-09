import { createReducer } from '@reduxjs/toolkit';

import {
  setCity, setSortType, loadOffers, setOffersDataLoadingStatus, requireAuthorization
} from './action';

// import { offers } from '../mocks-off/offers';

import { DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

type InitialState = {
  city: string;
  sortType: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
