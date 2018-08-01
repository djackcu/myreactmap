import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import escapeRegExp from 'escape-string-regexp'
import './App.css';
import MapContainer from './mapContainer'
import datalocations from './Locations'
import SideBar from './sideBar'

class App extends Component {
  state = {
    listLocations:[],
    content:'',
    query:'',
    showInfoWindow: false,
    activeMarker: null,
    selectedPlace: null
  }
componentDidMount(){
    this.setState({listLocations:datalocations})
}
//Fetch data from Wikipedia
getData = (title) =>{
  const urlTitle = title.replace(/\s/gm,'%20')
  const api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&exsentence=3&exlimit=1&explaintext=1&titles='+ urlTitle;
  fetchJsonp(api)
  .then((response) =>response.json())
  .then(data => {
        let placeExtract = data.query.pages[0].extract.split('==')[0];
        this.setState({content:placeExtract});
  });}
searchLocations = (query) => {
  let locationSearched;
  if (query) {
    const match = new RegExp(escapeRegExp(query.trim()),'i')
    locationSearched = this.state.listLocations.filter(location => match.test(location.title))
  }else {
    locationSearched = datalocations;
  }
  this.setState({listLocations:locationSearched, query:query.trim()})
}
onMarkerClick = (props, marker) => {
    const {title,position} = props;
    this.setState({
      selectedPlace: {title,position},
      activeMarker: marker,
      showInfoWindow: true
    });
    this.getData(marker.title);
    }

onCloseClicked = (props) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null,
        selectedPlace: null,
        content:''
      })
    }
  };

  onSelectPlace = (place) => {
    this.setState({
      selectedPlace: place
    });
    this.getData(place.title);
  }
  
  render() {
    const {listLocations, content, query,activeMarker,showInfoWindow,selectedPlace} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Old Havana City</h1>
        </header>
        <SideBar className="App-sideBar" locations={listLocations} searchLocations={this.searchLocations} query={query} content={content} onSelectPlace={this.onSelectPlace}/>
        <MapContainer className="App-map" locations={listLocations} onCloseClicked={this.onCloseClicked} onMarkerClick={this.onMarkerClick} activeMarker={activeMarker} showInfoWindow={showInfoWindow} selectedPlace={selectedPlace}/>
      </div>
    );
  }
}

export default App;
