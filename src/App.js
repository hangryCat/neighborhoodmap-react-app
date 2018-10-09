import React, { Component } from 'react';
import './App.css';
import FoursquareAPI from './API/';
import Map from './components/Map';

class App extends Component {
  componentDidMount() {
    FoursquareAPI.search({
      near: 'San Diego',
      query: 'sushi',
      limit: 10
    }).then(results => console.log(results));
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
