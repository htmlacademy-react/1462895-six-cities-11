import { useState } from 'react';

import cn from 'classnames';

import { PlaceCardType } from '../../const';

import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
  cardType: PlaceCardType;
  liftUpCrossedOfferId?: (offerId: number | null) => void;
}

function PlaceCards({ offers, cardType, liftUpCrossedOfferId }: PlaceCardsProps): JSX.Element {
  const [, setActiveOfferId] = useState<number | null>(null);

  const handleMouseCrossCard = (offerId: number | null) => {
    setActiveOfferId(offerId);
    liftUpCrossedOfferId?.(offerId);
  };

  return (
    <div
      className={cn(
        {
          'cities__places-list': cardType === PlaceCardType.Cities,
          'tabs__content': cardType === PlaceCardType.Cities,
          'near-places__list': cardType === PlaceCardType.NearPlaces,
          'places__list': cardType !== PlaceCardType.Favorites,
          'favorites__places': cardType === PlaceCardType.Favorites,
        }
      )}
    >
      {offers.map((offer) => {
        if (cardType === PlaceCardType.Cities) {
          return (
            <PlaceCard
              offer={offer}
              cardType={cardType}
              onMouseCrossCard={handleMouseCrossCard}
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
