import { LogoTypes, AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

type HeaderProps = {
  isManPage?: boolean;
  hasNav?: boolean;
  authorizationStatus?: AuthorizationStatus;
}

function Header({
  isManPage = false,
  hasNav = false,
  authorizationStatus = AuthorizationStatus.NoAuth,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={LogoTypes.Header} isManPage={isManPage} />
          </div>
          {hasNav && <Nav authorizationStatus={authorizationStatus} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
