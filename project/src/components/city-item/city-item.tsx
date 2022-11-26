import cn from 'classnames';

import { setCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type CityItemProps = {
  city: string;
}

function CityItem({ city }:CityItemProps ): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  const clList = cn(
    'locations__item-link',
    'tabs__item',
    {
      'tabs__item--active': city === currentCity,
    }
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCity(city));
  };

  return (
    <li className="locations__item" key={city}>
      {city === currentCity &&
      <div className={clList}>
        <span>{city}</span>
      </div>}

      {city !== currentCity &&
      <a
        href={`#${city}`}
        className={clList}
        onClick={() => handleClick()}
      >
        <span>{city}</span>
      </a>}
    </li>
  );
}

export default CityItem;
