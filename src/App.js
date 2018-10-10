import React, { Component } from 'react';
import './App.css';
import FoursquareAPI from './API/';
import Map from './components/Map';

class App extends Component {
  // Adding constructor and setting the state will make it easier to use/connect
  // throughout the different files
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12
    };
  }
// This method handles when the marker is clicked
// isOpen is default to false, but changed to true here
// The Object.assign() method is used to copy the values of all enumerable own properties
// from the source object(s) to a target object. It will return the target object
  // The current marker is assigned the property from the the 'this.state.markers'
  markerClick = (marker) => {
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers.marker) })
  }

  componentDidMount() {
    FoursquareAPI.search({
      near: 'San Diego',
      query: 'sushi',
      limit: 10
    }).then(results => {
        // Deconstruct the responses for each state
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
          return {
            // Sets the current lat/lng to the correct location
            lat: venue.location.lat,
            lng: venue.location.lng,
            // No marker should be open by default
            isOpen: false,
            // All markers should be visible by default
            isVisible: true,
          };
        });
        this.setState({ venues, center, markers });
        console.log(results)
      });
  }

  render() {
    // {...this.state} adds the all of the state declared above to the map component
    return (
      <div className="App">
        <Map {...this.state } />
      </div>
    );
  }
}

export default App;
