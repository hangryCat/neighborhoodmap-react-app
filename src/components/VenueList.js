import React, { Component } from 'react';
import ListItem from './ListItem';

export default class VenueList extends Component {
  render() {
    // Map over the venue props/information to be displayed with in the ListItem component
    return (
      <ol className="venue-list">
        {this.props.venues && this.props.venues.map((venue, index) => (
            <ListItem key={index} {...venue} listItemClick={this.props.listItemClick} />
          ))
        }
      </ol>
    );
  }
}
