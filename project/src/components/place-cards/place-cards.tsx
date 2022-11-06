import { useState } from 'react';

import cn from 'classnames';

import { PlaceCardType } from '../../const';

import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
  cardType: PlaceCardType;
}

function PlaceCards({ offers, cardType }: PlaceCardsProps): JSX.Element {
  const [, setActiveOfferId] = useState<number | null>(null);

  const handleMouseCrossCard = (offerId: number | null) => setActiveOfferId(offerId);

  return (
    <div
      className={cn(
        {
          'cities__places-list': cardType === PlaceCardType.Cities,
          'places__list': cardType === PlaceCardType.Cities,
          'tabs__content': cardType === PlaceCardType.Cities,
          'favorites__places': cardType === PlaceCardType.Favorites,
        }
      )}
    >
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          cardType={cardType}
          onMouseCrossCard={handleMouseCrossCard}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default PlaceCards;
