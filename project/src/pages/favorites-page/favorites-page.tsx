import { AuthorizationStatus, PlaceCardType } from '../../const';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import PlaceCard from '../../components/place-card/place-card';

import { offers } from '../../mocks/offers';

function FavoritesPage():JSX.Element {
  return (
    <div className="page">
      <Header hasNav authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    offer={offers[0]}
                    cardType={PlaceCardType.Favorites}
                    key={offers[0].id}
                  />

                  <PlaceCard
                    offer={offers[1]}
                    cardType={PlaceCardType.Favorites}
                    key={offers[1].id}
                  />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    offer={offers[2]}
                    cardType={PlaceCardType.Favorites}
                    key={offers[2].id}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;
