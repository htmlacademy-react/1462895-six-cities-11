import { User } from './user';

type location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferCity = {
  location: location;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersByCities = {
  [key: string]: Offer[];
}
