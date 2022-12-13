import { useState } from 'react';

import { PlaceCardType, MapType } from '../../const';
import { filterOffersByCity } from '../../utils';

import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-process/selectors';
import { getOffers } from '../../store/app-data/selectors';

import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortElement from '../../components/sort-element/sort-element';
import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';

function MainPage():JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);


  const [ActiveOfferId, setActiveOfferId] = useState<number | null>(null);

  const currentCityOffers = filterOffersByCity(city, offers);

  const handleMouseCrossCard = (offerId: number | null) => setActiveOfferId(offerId);

  return (
    <div className="page page--gray page--main">
      <Header isManPage hasNav />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {city}</b>
              <SortElement />
              <PlaceCards
                offers={currentCityOffers}
                cardType={PlaceCardType.Cities}
                onMouseCrossCard={handleMouseCrossCard}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={currentCityOffers}
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
