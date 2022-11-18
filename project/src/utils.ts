import { RatingLimit } from './const';

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
