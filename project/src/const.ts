import { Rating } from './types/rating';

export const AvailableCities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const StarMarks: Rating[] = [
  ['perfect', 5],
  ['good', 4],
  ['not bad', 3],
  ['badly', 2],
  ['terribly', 1],
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

export enum LayerConfig {
  BaseUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}

export enum CustomMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg',
}

export enum MapType {
  Cities = 'cities',
  NearPlaces = 'property',
}
