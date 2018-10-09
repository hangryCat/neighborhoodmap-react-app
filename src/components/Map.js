import React, { Component } from 'react';
// Below component code imported from https://tomchentw.github.io/react-google-maps/
// Used to render Google API Maps
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={props.center}
    >
      {props.markers && props.markers
        // Filters all visible markers
        .filter(marker => marker.isVisible)
        // Maps (create) a new array of strings based on what was filtered
        .map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))
      }
    </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    // {...this.props} spreads MyMapComponent down below
    return (
      <MyMapComponent
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBfyYKVKGUTbiaDlAPYZjRGRAnexfUeBjU"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
