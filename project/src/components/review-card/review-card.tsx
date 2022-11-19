import dayjs from 'dayjs';

import { getRoundPercentRating } from '../../utils';

import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

function ReviewCard({ review }: ReviewProps): JSX.Element {
  const { comment, date, rating, user } = review;
  const { name, avatarUrl } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt={`${name}'s avatar`}
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRoundPercentRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewCard;
