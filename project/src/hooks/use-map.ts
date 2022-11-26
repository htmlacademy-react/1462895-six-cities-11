import { useState, useRef, useEffect, MutableRefObject } from 'react';

import leaflet, { Map } from 'leaflet';

import { Location } from '../types/offer';
import { LayerConfig } from '../const';

function useMap(mapRef: MutableRefObject<HTMLEmbedElement | null>, cityLocation: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        zoom: cityLocation.zoom,
      });

      leaflet
        .tileLayer(
          LayerConfig.BaseUrl,
          {
            attribution: LayerConfig.Attribution,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityLocation]);

  return map;
}

export default useMap;
