import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  // Initialize local state by assigning the query object within this.state
  // The query will be used to handle search filters of venues
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }
  // The following method will filter the markers to show only ones that matches
  // the user's input in the search bar
  searchVenuesMarkers = evt => {
    this.setState({ query: evt.target.value });
    // To hide markers that aren't being searched for
    const markers = this.props.venues.map(venue => {
      const aMatch = venue.name.toLowerCase().includes(evt.target.value.toLowerCase());
      // This is used to associate a marker with its corresponding venue
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if (aMatch) {
        marker.isVisible = true;
      }
      else {
        marker.isVisible = false;
      }
      return marker;
    });
    // Set the state of the markers; the only thing being changes is isVisible
    this.props.updateSuperState({ markers })
  };

  render() {
    return (
      <div className="sidebar">
        <input type={"search"} id={"search"} placeholder={"Search"} onChange={this.searchVenuesMarkers} />
        <VenueList {...this.props} listItemClick={this.props.listItemClick} />
      </div>
    );
  }
}
