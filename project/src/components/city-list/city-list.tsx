import { AvailableCities } from '../../const';

import CityItem from '../city-item/city-item';

function CityList(): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {AvailableCities.map((city) => (
          <CityItem city={city} key={city}/>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
