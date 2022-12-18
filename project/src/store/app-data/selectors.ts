import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOfferDataLoading;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
export const getNearOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOffersDataLoading;
export const getComments = (state: State): Review[] => state[NameSpace.Data].comments;
export const getCommentsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isCommentsDataLoading;
export const getCommentsDataSendingStatus = (state: State): boolean => state[NameSpace.Data].isCommentsDataSending;
