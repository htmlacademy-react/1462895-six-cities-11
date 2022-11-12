import { useState } from 'react';

import { AuthorizationStatus, PlaceCardType, MapType } from '../../const';

import Header from '../../components/header/header';
import AvailableCities from '../../components/locations/locations';
import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';

import { Offer, Location } from '../../types/offer';

type MainPageProps = {
  offersCount: number;
  offers: Offer[];
}

const getLocation = (data: Offer[]):Location => data[0].city.location;

function MainPage({offersCount, offers}: MainPageProps):JSX.Element {
  const [ActiveOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleMouseCrossCard = (offerId: number | null) => setActiveOfferId(offerId);

  return (
    <div className="page page--gray page--main">
      <Header isManPage hasNav authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <AvailableCities currentLocation="Amsterdam" />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlaceCards
                offers={offers}
                cardType={PlaceCardType.Cities}
                onMouseCrossCard={handleMouseCrossCard}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={getLocation(offers)}
                offers={offers}
                mapType={MapType.Cities}
                crossedCardId={ActiveOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
