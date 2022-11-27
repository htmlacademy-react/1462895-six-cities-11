import cn from 'classnames';

import { sortTypes, defaultSortType } from '../../const';

type SortEListProps = {
  currentSortType: string;
  isSortListShown: boolean;
  setSortType: (sortType: string) => void;
  setiISortListShown: (iSortListShown: boolean) => void;
}

function SortList({ currentSortType, isSortListShown, setSortType, setiISortListShown }: SortEListProps): JSX.Element {
  const clList = cn (
    'places__options',
    'places__options--custom',
    {'places__options--opened': isSortListShown},
  );

  const handleClick = (sortType: string) => {
    setSortType(sortType);
    setiISortListShown(false);
  };

  return (
    <ul className={clList}>
      {sortTypes.map((sortType) => (
        <li
          className={cn(
            'places__option',
            {'places__option--active':sortType === currentSortType},
          )}
          tabIndex={0}
          key={sortType}
          onClick={() => handleClick(sortType)}
        >
          {sortType}
        </li>
      ))}
    </ul>
  );
}

export default SortList;
