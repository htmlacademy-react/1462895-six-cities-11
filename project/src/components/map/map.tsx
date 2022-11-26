import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks';

import { CustomMarker, MapType } from '../../const';
import { getLocation } from '../../utils';

type MapProps = {
  mapType: MapType;
  crossedCardId: number | null;
}

const defaultCustomMarker = leaflet.icon({
  iconUrl: CustomMarker.Default,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentCustomMarker = leaflet.icon({
  iconUrl: CustomMarker.Current,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map({ mapType, crossedCardId }: MapProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCityOffers = useAppSelector((state) => state.currentCityOffers);

  const mapRef = useRef(null);
  const cityLocation = getLocation(currentCityOffers);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      offers.forEach(({ location, id }) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: (id === crossedCardId)
              ? currentCustomMarker
              : defaultCustomMarker,
          })
          .addTo(map);
      });

      map.setView({
        lat: cityLocation.latitude,
        lng: cityLocation.longitude,
      });
    }


  }, [map, currentCityOffers, cityLocation, offers, crossedCardId]);

  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
