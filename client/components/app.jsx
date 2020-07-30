import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};
const center = {
  lat: 34.076594,
  lng: -118.007391
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDtcHhMj3M4jXBJK5GC8UDIZ8C_UZaJY1M',
    libraries
  });

  if (loadError) return 'Error Loading Map';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
      </GoogleMap>
    </div>
  );
}
