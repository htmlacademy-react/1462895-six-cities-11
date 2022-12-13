import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Offer } from './offer';

export type AppData = {
  offers:Offer[];
  isOffersDataLoading: boolean;
};

export type GameProcess = {
  mistakes: number;
  step: number;
};

export type AppProcess = {
  city: string;
  sortType: string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
