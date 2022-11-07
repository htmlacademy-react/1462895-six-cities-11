export const AvailableCities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum LogotypeType {
  Header = 'header',
  Footer = 'footer',
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
  NearPlaces = 'near-places',
}
