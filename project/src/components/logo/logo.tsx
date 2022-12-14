import { Link } from 'react-router-dom';

import cn from 'classnames';

import { LogotypeType } from '../../const';

type LogoProps = {
  type: LogotypeType;
  isManPage: boolean;
}

function Logo({ type, isManPage = false }: LogoProps): JSX.Element {
  const sizes = {
    [LogotypeType.Header]: {
      width: 81,
      height: 41,
    },
    [LogotypeType.Footer]: {
      width: 64,
      height: 33,
    },
  };

  const { width, height } = sizes[type];

  return (
    <Link
      className={cn(
        `${type}__logo-link`,
        {[`${type}__logo-link--active`]: isManPage}
      )}
      to="/"
    >
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
