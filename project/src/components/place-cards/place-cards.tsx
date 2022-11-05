import { useState } from 'react';

import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards({ offers }: PlaceCardsProps): JSX.Element {
  const [, setActiveOfferId] = useState<number | null>(null);

  const handleMouseCrossCard = (offerId: number | null) => setActiveOfferId(offerId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          onMouseCrossCard={handleMouseCrossCard}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default PlaceCards;
