import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li tabIndex={2} className="list-item" onClick={() => this.props.listItemClick(this.props)}>
        <img src={this.props.categories[0].icon.prefix + "32" + this.props.categories[0].icon.suffix}
          alt={this.props.categories[0].name} />

        {this.props.name}
      </li>
    );
  }
}
