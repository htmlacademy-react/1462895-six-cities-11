import PlaceCard from '../place-card/place-card';

import { Offer } from '../../types/offer';

type PlaceCardsProps = {
  offers: Offer[];
}

function PlaceCards({ offers }: PlaceCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} />)}
    </div>
  );
}

export default PlaceCards;
