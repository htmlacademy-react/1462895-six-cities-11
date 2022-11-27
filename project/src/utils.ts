import { RatingLimit } from './const';

import { Offer, Location } from './types/offer';

const PERCENTS_PER_STAR = 100 / (RatingLimit.Max - RatingLimit.Min); // %

export const getRoundPercentRating = (rating: number): string => {
  if (rating < RatingLimit.Min) {
    rating = RatingLimit.Min;
  }

  if (rating > RatingLimit.Max) {
    rating = RatingLimit.Max;
  }

  return `${Math.floor(rating) * PERCENTS_PER_STAR}%`;
};

export const getLocation = (data: Offer[]):Location => data[0].city.location;

export const filterOffersByCity = (target: string, data: Offer[]):Offer[] =>
  data.filter((item) => item.city.name === target);
