import { MouseEvent, useState } from 'react';

import { useAppSelector } from '../../hooks';

import SortList from '../sort-list/sort-list';

function SortElement(): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);

  const [ isSortListShown, setiISortListShown ] = useState<boolean>(false);

  const handleClick = ({ target }: MouseEvent<HTMLSpanElement>) => {
    setiISortListShown(!isSortListShown);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        isSortListShown={isSortListShown}
        setiISortListShown={setiISortListShown}
      />
    </form>
  );
}

export default SortElement;
