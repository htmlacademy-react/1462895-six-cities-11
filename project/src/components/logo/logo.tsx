import cn from 'classnames';

import { LogoTypes } from '../../const';

type LogoProps = {
  type: LogoTypes;
  isManPage: boolean;
}

function Logo({ type, isManPage = false }: LogoProps): JSX.Element {
  const sizes = {
    [LogoTypes.Header]: {
      width: 81,
      height: 41,
    },
    [LogoTypes.Footer]: {
      width: 64,
      height: 33,
    },
  };

  const { width, height } = sizes[type];

  return (
    <a
      className={cn(
        `${type}__logo-link`,
        {[`${type}__logo-link--active`]: isManPage}
      )}
      href="/"
    >
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
