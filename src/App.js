import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import MapContainer from './mapContainer'
import datalocations from './Locations'
import SideBar from './sideBar'

class App extends Component {
  state = {
    locations:datalocations,
    content:''
  }
componentDidMount(){
    
}
//Fetch data from Wikipedia
getData = (title) =>{
  const urlTitle = title.replace(/\s/gm,'%20')
  const api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&exsentences=5&exlimit=1&explaintext=1&titles='+ urlTitle;
  fetchJsonp(api)
  .then((response) =>response.json())
  .then(data => {
        let placeExtract = data.query.pages[0].extract;
        this.setState({content:placeExtract});
  });}

  
  render() {
    const {locations,content} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Havana City</h1>
        </header>
        <SideBar className="sidebar" locations={locations}/>
        <MapContainer className="App-intro" locations={locations} getData={this.getData} content={content} />
      </div>
    );
  }
}

export default App;
