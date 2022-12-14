import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

import { LogotypeType } from '../../const';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

type HeaderProps = {
  isManPage?: boolean;
  hasNav?: boolean;
}

function Header({ isManPage = false, hasNav = false, }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={LogotypeType.Header} isManPage={isManPage} />
          </div>
          {hasNav && <Nav authorizationStatus={authorizationStatus} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
