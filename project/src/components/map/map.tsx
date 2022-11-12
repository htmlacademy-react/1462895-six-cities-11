import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { CustomMarker, MapType } from '../../const';
import { Offer, Location } from '../../types/offer';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: Location;
  offers: Offer[];
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

function Map({ city, offers, mapType, crossedCardId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
    }
  }, [map, offers, crossedCardId]);

  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
