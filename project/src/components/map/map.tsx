import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { CustomMarker } from '../../const';
import { Offer, Location } from '../../types/offer';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: Location;
  offers: Offer[];
  crossedCardId: number | null;
}

function Map({ city, offers, crossedCardId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomMarker = leaflet.icon({
    iconUrl: CustomMarker.Default,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomMarker = leaflet.icon({
    iconUrl: CustomMarker.Current,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

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
      className="cities__map map"
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
