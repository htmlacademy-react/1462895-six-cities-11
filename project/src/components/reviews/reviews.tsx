import ReviewCard from '../review-card/review-card';
import ReviewsForm from '../reviews-form/reviews-form';

import { Review } from '../../types/review';

type ReviewCardsProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewCardsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id}/>
        ))}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewList;
