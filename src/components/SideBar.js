import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <input type={"search"} id={"search"} placeholder={"Search"} />
        <VenueList {...this.props} listItemClick={this.props.listItemClick} />
      </div>
    );
  }
}
