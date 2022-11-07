import { Link } from 'react-router-dom';

import cn from 'classnames';

import { PlaceCardType } from '../../const';
import { getRoundPercentRating } from '../../utils';

import { Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  cardType: PlaceCardType;
  onMouseCrossCard?: (offerId: number | null) => void;
}

function PlaceCard({ offer, cardType, onMouseCrossCard }: PlaceCardProps): JSX.Element {
  const {
    previewImage,
    title,
    isFavorite,
    isPremium,
    rating,
    type,
    price,
    id,
  } = offer;

  const sizes = {
    [PlaceCardType.Cities]: {
      width: 260,
      height: 200,
    },
    [PlaceCardType.Favorites]: {
      width: 150,
      height: 110,
    },
    [PlaceCardType.NearPlaces]: {
      width: 260,
      height: 200,
    },
  };

  const { width, height } = sizes[cardType];

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onMouseCrossCard?.(id)}
      onMouseLeave={() => onMouseCrossCard?.(null)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/:${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place preview"
          />
        </Link>
      </div>
      <div
        className={cn(
          'place-card__info',
          {'favorites__card-info': cardType === PlaceCardType.Favorites}
        )}
      >
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
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{`${type[0].toUpperCase()}${type.slice(1)}`}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
