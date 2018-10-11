import React, { Component } from 'react';
// Below component code imported from https://tomchentw.github.io/react-google-maps/
// Used to render Google API Maps
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

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
        .map((marker, index) => {
          // Finding markers/venue that have the same id
          const venueInfo = props.venues.find(venue => venue.id === marker.id);
          // Adding venue photos and venue name inside the InfoWindow
          // React.Fragment allows for a list of children w/o adding extra nodes
          return (
            <Marker key={index} position={{ lat:marker.lat, lng: marker.lng }}
            onClick={() => props.markerClick(marker)}>
            {marker.isOpen && venueInfo.bestPhoto && (
              <InfoWindow>
                <React.Fragment>
                  <h3>{venueInfo.name}</h3>
                  <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue"} />
                </React.Fragment>
              </InfoWindow>
            )}
            </Marker>
          )
        })
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
        containerElement={<div style={{ height: `100%`, width: `70%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
