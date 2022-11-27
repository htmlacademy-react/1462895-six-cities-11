import cn from 'classnames';

import { setSortType } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { sortTypes } from '../../const';

type SortEListProps = {
  isSortListShown: boolean;
  setiISortListShown: (iSortListShown: boolean) => void;
}

function SortList({ isSortListShown, setiISortListShown }: SortEListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);

  const dispatch = useAppDispatch();

  const clList = cn (
    'places__options',
    'places__options--custom',
    {'places__options--opened': isSortListShown},
  );

  const handleClick = (type: string) => {
    dispatch(setSortType(type));
    setiISortListShown(false);
  };

  return (
    <ul className={clList}>
      {sortTypes.map((type) => (
        <li
          className={cn(
            'places__option',
            {'places__option--active':type === sortType},
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
