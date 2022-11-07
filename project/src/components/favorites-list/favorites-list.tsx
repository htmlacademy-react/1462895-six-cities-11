import { PlaceCardType } from '../../const';

import PlaceCards from '../place-cards/place-cards';

import { Offer, OffersByCities } from '../../types/offer';

type FavoritesListProps = {
  offers: Offer[];
}

const mapOffersToCities = (data: Offer[]) => (
  data.reduce<OffersByCities>((acc: OffersByCities, offer: Offer) => {
    if (offer.isFavorite) {
      if (!acc[offer.city.name]) {
        acc[offer.city.name] = [];
      }

      acc[offer.city.name].push(offer);
    }

    return acc;
  }, {}));

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const groupedOffers = mapOffersToCities(offers);


  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([ city, cityOffers ]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <PlaceCards offers={cityOffers} cardType={PlaceCardType.Favorites} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
