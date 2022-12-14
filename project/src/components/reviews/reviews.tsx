import dayjs from 'dayjs';

import ReviewCard from '../review-card/review-card';
import ReviewsForm from '../reviews-form/reviews-form';

import { Review } from '../../types/review';

type ReviewCardsProps = {
  reviews: Review[];
  id: string | undefined;
}

function ReviewList({ reviews, id }: ReviewCardsProps): JSX.Element {

  const sortedNLimitedReviews = reviews
    .slice(0)
    .sort((prev, next) => dayjs(next.date).valueOf() - dayjs(prev.date).valueOf())
    .slice(0, 10);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedNLimitedReviews.map((review) => (
          <ReviewCard review={review} key={review.id}/>
        ))}
      </ul>
      <ReviewsForm id={id} />
    </section>
  );
}

export default ReviewList;
