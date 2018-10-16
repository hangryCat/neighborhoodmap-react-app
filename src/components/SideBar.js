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

  render() {
    return (
      <div className="sidebar">
        <input type={"search"} id={"search"} placeholder={"Search"} />
        <VenueList {...this.props} listItemClick={this.props.listItemClick} />
      </div>
    );
  }
}
