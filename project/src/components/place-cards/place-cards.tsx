import cn from 'classnames';

import { PlaceCardType } from '../../const';

import { useAppSelector } from '../../hooks';
import { getSortType } from '../../store/app-process/selectors';

import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
  cardType: PlaceCardType;
  onMouseCrossCard?: (offerId: number | null) => void;
}

function PlaceCards({ offers, cardType, onMouseCrossCard }: PlaceCardsProps): JSX.Element {
  const sortType = useAppSelector(getSortType);

  const clList = cn(
    {
      'cities__places-list': cardType === PlaceCardType.Cities,
      'tabs__content': cardType === PlaceCardType.Cities,
      'near-places__list': cardType === PlaceCardType.NearPlaces,
      'places__list': cardType !== PlaceCardType.Favorites,
      'favorites__places': cardType === PlaceCardType.Favorites,
    }
  );

  const sortOffersByLowPrice = (unsortedOffers: Offer[]): Offer[] => unsortedOffers.sort((a, b) => a.price - b.price);
  const sortOffersByHighPrice = (unsortedOffers: Offer[]): Offer[] => unsortedOffers.sort((a, b) => b.price - a.price);
  const sortOffersByTopRated = (unsortedOffers: Offer[]): Offer[] => unsortedOffers.sort((a, b) => b.rating - a.rating);

  let sortedOffers: Offer[] = offers;

  switch (sortType) {
    case 'Popular':
      sortedOffers = offers;
      break;
    case 'Price: low to high':
      sortedOffers = sortOffersByLowPrice(offers);
      break;
    case 'Price: high to low':
      sortedOffers = sortOffersByHighPrice(offers);
      break;
    case 'Top rated first':
      sortedOffers = sortOffersByTopRated(offers);
      break;
    default:
      throw new Error('Unknown sort type');
  }

  return (
    <div className={clList}>
      {sortedOffers.map((offer) => {
        if (onMouseCrossCard) {
          return (
            <PlaceCard
              offer={offer}
              cardType={cardType}
              onMouseCrossCard={onMouseCrossCard}
              key={offer.id}
            />
          );
        }

        return (
          <PlaceCard
            offer={offer}
            cardType={cardType}
            key={offer.id}
          />
        );
      })}
    </div>
  );
}

export default PlaceCards;
