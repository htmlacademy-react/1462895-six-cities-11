import { useEffect, useRef } from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';

import { CustomMarker, MapType } from '../../const';
import { getLocation } from '../../utils';

import { Offer } from '../../types/offer';

type MapProps = {
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

function Map({ offers, mapType, crossedCardId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const cityLocation = offers.length ? getLocation(offers) : null;
  const map = useMap(mapRef, cityLocation);
  const markerGroup = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      markerGroup.addTo(map);

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
          .addTo(markerGroup);
      });
    }

    return () => {
      if (map) {
        map.removeLayer(markerGroup);
      }
    };
  }, [map, offers, crossedCardId, markerGroup]);

  useEffect(() => {
    if (map && cityLocation) {
      map.setView({
        lat: cityLocation.latitude,
        lng: cityLocation.longitude,
      });

      map.setZoom(cityLocation.zoom);
    }
  }, [map, cityLocation]);

  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
