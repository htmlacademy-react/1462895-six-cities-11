import cn from 'classnames';

type LogoProps = {
  type: 'header' | 'footer';
  isManPage?: boolean;
}

function Logo({ type, isManPage = false }: LogoProps): JSX.Element {
  const sizes = {
    header: {
      width: 81,
      height: 41,
    },
    footer: {
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
