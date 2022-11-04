import { RatingLimits } from './const';

const PERCENTS_PER_STAR = 100 / (RatingLimits.Max - RatingLimits.Min); // %

export const getRoundPercentRating = (rating: number): string => {
  if (rating < RatingLimits.Min) {
    rating = RatingLimits.Min;
  }

  if (rating > RatingLimits.Max) {
    rating = RatingLimits.Max;
  }

  return `${Math.round(rating) * PERCENTS_PER_STAR}%`;
};
