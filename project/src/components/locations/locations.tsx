import { Cities } from '../../const';

type LocationsProps = {
  currentLocation: string;
}

function Locations({ currentLocation }: LocationsProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city) => (
          <li className="locations__item" key={city.id}>
            {
              city.name === currentLocation
                ? (
                  <div className="locations__item-link tabs__item tabs__item--active">
                    <span>{city.name}</span>
                  </div>
                )
                : (
                  <a className="locations__item-link tabs__item" href="/#">
                    <span>{city.name}</span>
                  </a>
                )
            }
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
