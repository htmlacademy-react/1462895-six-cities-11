import { useState } from 'react';

import { useAppSelector } from '../../hooks';

import SortList from '../sort-list/sort-list';

function SortElement(): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);

  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpen(!open)}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        isSortListShown={open}
        onSortClick={() => setOpen(false)}
      />
    </form>
  );
}

export default SortElement;
