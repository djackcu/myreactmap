import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './mapContainer'
import datalocations from './Locations'

class App extends Component {
  state = {
    locations:datalocations
  }
componentDidMount(){
this.getData("Havana Cathedral");
}
getData = (title) =>{
  const api ='https://en.wikipedia.org/w/api.php' ;
  let data = {
    "mode": "no-cors",   
    "action": "query",
    "format": "json",
    "prop": "extracts",
    "titles": title,
    "formatversion": "2",
    "exsentences": "5",
    "explaintext": 1
  }
  const api2 = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Havana%20Cathedral&formatversion=2&exsentences=5&explaintext=1';
  const data2 = {
    "mode": "no-cors"
  }

  fetch(api2, data2)
  .then((response) =>response.json)
  .then(data => {
        console.log(data);
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
