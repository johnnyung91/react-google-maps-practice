/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const googleMapsApiKey = 'AIzaSyDtcHhMj3M4jXBJK5GC8UDIZ8C_UZaJY1M';
const center = {
  lat: 34.074491,
  lng: -118.072029
};

export default function Map() {

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={center}
          defaultZoom={15}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}
