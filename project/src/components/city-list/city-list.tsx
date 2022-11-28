import { AvailableCities } from '../../const';

import { useAppSelector } from '../../hooks';

import CityItem from '../city-item/city-item';

function CityList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AvailableCities.map((city) => (
          <CityItem city={city} currentCity={currentCity} key={city}/>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
