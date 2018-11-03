import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  // Initialize local state by assigning the query object within this.state
  // The query will be used to handle search filters of venues
  constructor() {
    super();
    this.state = {
      query: '',
      venues: []
    };
  }
  // This method handles the venue list items
  // It will show list items that are a match depending on what the user input in the
    // search bar and the venue's name
  handleVenuesList = () => {
    if (this.state.query.trim() !== '') {
      const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
      return venues;
    }
    return this.props.venues;
  };
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
        <h1>Sushi Restaurants in San Diego, CA</h1>
        <input type={"search"} id={"search"} placeholder={"Search"} onChange={this.searchVenuesMarkers} />
        <VenueList {...this.props} venues={this.handleVenuesList()} listItemClick={this.props.listItemClick} />
      </div>
    );
  }
}
