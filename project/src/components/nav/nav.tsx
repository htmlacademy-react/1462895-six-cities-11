import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {logoutAction} from '../../store/api-actions';

import { AuthorizationStatus, AppRoute } from '../../const';
import { getUserEmail } from '../../store/app-process/selectors';

type navProps = {
  authorizationStatus: AuthorizationStatus;
}

function Nav({ authorizationStatus }: navProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserEmail);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {
            authorizationStatus === AuthorizationStatus.Auth &&
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Main}>
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{userEmail}</span>
              <span className="header__favorite-count">3</span>
            </Link>
          }
          {
            authorizationStatus === AuthorizationStatus.NoAuth &&
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <span className="header__login">Sign in</span>
            </Link>
          }
        </li>
        {
          authorizationStatus === AuthorizationStatus.Auth &&
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to={AppRoute.Main}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Nav;
