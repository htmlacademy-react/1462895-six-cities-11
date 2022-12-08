import { useRef } from 'react';

import cn from 'classnames';

import { setSortType } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import UseOnClickOutside from '../../hooks/use-on-click-outside';

import { sortTypes } from '../../const';

type SortEListProps = {
  isSortListShown: boolean;
  onSortClick: () => void;
  onClickOutside: () => void;
}

function SortList({ isSortListShown, onSortClick, onClickOutside }: SortEListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);
  const sortList = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  const handleClickOutside = () => {
    onClickOutside();
  };

  UseOnClickOutside(sortList, handleClickOutside);

  const clList = cn (
    'places__options',
    'places__options--custom',
    {'places__options--opened': isSortListShown},
  );

  const handleClick = (type: string) => {
    dispatch(setSortType(type));
    onSortClick();
  };

  return (
    <ul className={clList} ref={sortList}>
      {sortTypes.map((type) => (
        <li
          className={cn(
            'places__option',
            {'places__option--active': type === sortType},
          )}
          tabIndex={0}
          key={type}
          onClick={() => handleClick(type)}
        >
          {type}
        </li>
      ))}
    </ul>
  );
}

export default SortList;