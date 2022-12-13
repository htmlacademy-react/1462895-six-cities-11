import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
