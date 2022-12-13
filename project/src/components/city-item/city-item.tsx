import { MouseEvent } from 'react';

import cn from 'classnames';

import { setCity } from '../../store/app-process/app-process';
import { useAppDispatch } from '../../hooks';

type CityItemProps = {
  city: string;
  currentCity: string;
}

function CityItem({ city, currentCity }:CityItemProps ): JSX.Element {
  const dispatch = useAppDispatch();

  const clList = cn(
    'locations__item-link',
    'tabs__item',
    {
      'tabs__item--active': city === currentCity,
    }
  );


  const handleClick = () => {
    dispatch(setCity);
  };

  return (
    <li className="locations__item">
      <a
        href={`#${city}`}
        className={clList}
        onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
          evt.preventDefault();
          handleClick();
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityItem;
