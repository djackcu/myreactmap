import React, { Component } from 'react';
import './App.css';
import MapContainer from './mapContainer'
import datalocations from './Locations'
import fetchJsonp from 'fetch-jsonp'

class App extends Component {
  state = {
    locations:datalocations
  }
componentDidMount(){
this.getData("Havana Cathedral");
}
//Fetch data from Wikipedia
getData = (title) =>{
  const urlTitle = title.replace(/\s/gm,'%20')
  const api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&exsentences=5&exlimit=1&explaintext=1&titles='+ urlTitle;

  fetchJsonp(api)
  .then((response) =>response.json())
  .then(data => {
        let placeExtract = data.query.pages[0];
        console.log(placeExtract);
  });}

  
  render() {
    const {locations} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Havana City</h1>
        </header>
        <MapContainer className="App-intro" locations={locations} />
      </div>
    );
  }
}

export default App;
