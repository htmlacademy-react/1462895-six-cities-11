import cn from 'classnames';

import { PlaceCardType } from '../../const';

import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
  cardType: PlaceCardType;
  onMouseCrossCard?: (offerId: number | null) => void;
}

function PlaceCards({ offers, cardType, onMouseCrossCard }: PlaceCardsProps): JSX.Element {
  const clList = cn(
    {
      'cities__places-list': cardType === PlaceCardType.Cities,
      'tabs__content': cardType === PlaceCardType.Cities,
      'near-places__list': cardType === PlaceCardType.NearPlaces,
      'places__list': cardType !== PlaceCardType.Favorites,
      'favorites__places': cardType === PlaceCardType.Favorites,
    }
  );

  return (
    <div className={clList}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          cardType={cardType}
          onMouseCrossCard={onMouseCrossCard}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default PlaceCards;
