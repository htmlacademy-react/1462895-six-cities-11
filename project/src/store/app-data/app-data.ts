import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import {
  fetchOffersAction, fetchFavoriteOffersAction, fetchOfferAction, fetchNearOffersAction,
  fetchCommentsAction, addCommentAction, changeFavoriteStatusAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  isOffersDataLoading: false,
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
  offer: null,
  isOfferDataLoading: false,
  nearOffers: [],
  isNearOffersDataLoading: false,
  comments: [],
  isCommentsDataLoading: false,
  isCommentsDataSending: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(addCommentAction.pending, (state) => {
        state.isCommentsDataSending = true;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.isCommentsDataSending = false;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataSending = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.offer = action.payload;

        const index = state.offers.findIndex((elem) => elem.id === action.payload.id);
        const nearIndex = state.nearOffers.findIndex((elem) => elem.id === action.payload.id);
        const favoriteIndex = state.favoriteOffers.findIndex((elem) => elem.id === action.payload.id);

        if (index !== -1) {
          state.offers[index] = action.payload;
        }

        if (nearIndex !== -1) {
          state.nearOffers[nearIndex] = action.payload;
        }

        if (favoriteIndex !== -1) {
          state.favoriteOffers[nearIndex] = action.payload;
          state.favoriteOffers.splice(favoriteIndex, 1);
        } else {
          state.favoriteOffers.push(action.payload);
        }
      });
  }
});
