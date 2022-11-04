import cn from 'classnames';

import { getRoundPercentRating } from '../../utils';

import { Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  cb: (x: number) => void;
}

function PlaceCard({ offer: {
  previewImage,
  title,
  isFavorite,
  isPremium,
  rating,
  type,
  price,
  id,
}, cb}: PlaceCardProps): JSX.Element {

  const MouseEnterHandler = () => {
    cb(id);

  };
  const MouseLeaveHandler = () => {
    cb(0);
  };


  return (
    <article
      className="cities__card place-card"
      onMouseEnter={MouseEnterHandler}
      onMouseLeave={MouseLeaveHandler}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="!#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place preview" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(
              'place-card__bookmark-button',
              'button',
              {'place-card__bookmark-button--active': isFavorite})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRoundPercentRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="!#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
