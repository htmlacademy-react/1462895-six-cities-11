import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';

export type AppData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  offer: Offer | null;
  isOfferDataLoading: boolean;
  nearOffers: Offer[];
  isNearOffersDataLoading: boolean;
  comments: Review[];
  isCommentsDataLoading: boolean;
  isCommentsDataSending: boolean;
};

export type AppProcess = {
  city: string;
  sortType: string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
