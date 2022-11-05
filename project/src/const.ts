export const AvailableCities = [
  { name: 'Paris', id: 1},
  { name: 'Cologne', id: 2},
  { name: 'Brussels', id: 3},
  { name: 'Amsterdam', id: 4},
  { name: 'Hamburg', id: 5},
  { name: 'Dusseldorf', id: 6},
];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/room/:id',
}

export enum LogotypeType {
  Header = 'HEADER',
  Footer = 'FOOTER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RatingLimit {
  Min = 0,
  Max = 5,
}

export enum PlaceCardType {
  Cities = 'cities',
  Favorites = 'favorites',
}
