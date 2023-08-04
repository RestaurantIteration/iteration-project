import React, {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
const { GOOGLE_API_KEY } = require('../../server/envVars');

let mapRef;

export default function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const restaurants = useSelector((state) => state.restaurants.restList);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    // do we need any other options here, such as additional libraries?
  });

  const defaultZoom = 14;
  const defaultCenter = useMemo(() => stateCenter, []);
  const options = useMemo(
    () => ({
      // what else might we need here?
      mapId: 'dd51250f4e314a82',
    }),
    []
  );

  function handleActiveMarker(id) {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
  }

  mapRef = useRef();
  const onLoad = useCallback(async (map) => {
    mapRef.current = map;
  }, []);
  const stateCenter = useSelector((state) =>
    mapRef.current?.panTo(state.google.center)
  );

  const renderMarker = useCallback((rest) => {
    return (
      <Marker
        key={rest.id}
        position={{
          lat: rest.coordinates.latitude,
          lng: rest.coordinates.longitude,
        }}
        title={rest.name}
        onClick={() => handleActiveMarker(rest.id)}
      >
        {activeMarker === rest.id ? (
          <InfoWindow
            key={'window' + rest.id}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>{rest.name}</div>
          </InfoWindow>
        ) : null}
      </Marker>
    );
  });

  return restaurants.length && isLoaded ? (
    <div id='mapiframe'>
      <GoogleMap
        zoom={14}
        center={defaultCenter}
        options={options}
        onLoad={onLoad}
        id='mapiframe'
      >
        {restaurants.map(renderMarker)}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
