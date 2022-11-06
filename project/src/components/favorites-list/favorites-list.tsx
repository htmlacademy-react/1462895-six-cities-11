// import cn from 'classnames';

import { AvailableCities, PlaceCardType } from '../../const';

import PlaceCards from '../place-cards/place-cards';

import { Offer, OffersByCities } from '../../types/offer';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const favoriteoffersByCities: OffersByCities = {};

  AvailableCities.forEach((city) => (favoriteoffersByCities[city.name] = []));

  offers.forEach((offer) => {
    if (offer.isFavorite) {
      favoriteoffersByCities[offer.city.name].push(offer);
    }
  });


  return (
    <ul className="favorites__list">
      {AvailableCities
        .filter((city) => favoriteoffersByCities[city.name].length)
        .map((city) => (
          <li className="favorites__locations-items" key={city.id}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span>{city.name}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <PlaceCards offers={favoriteoffersByCities[city.name]} cardType={PlaceCardType.Favorites} />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default FavoritesList;
