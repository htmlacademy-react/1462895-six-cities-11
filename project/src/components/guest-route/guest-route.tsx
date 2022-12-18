import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type GuestRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function GuestRoute({ authorizationStatus, children }: GuestRouteProps): JSX.Element {
  return (
    authorizationStatus !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default GuestRoute;
