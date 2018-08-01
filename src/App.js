import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import escapeRegExp from 'escape-string-regexp'
import MapContainer from './mapContainer'
import dataLocations from './Locations'
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
    this.setState({listLocations:dataLocations})
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
  })
  .catch((err) => {
    this.setState({content:'Description no available'});
    console.log(err);
  });}
searchLocations = (query) => {
  let locationSearched;
  console.log(query);
  if (query) {
    const match = new RegExp(escapeRegExp(query.trim()),'i')
    locationSearched = dataLocations.filter(location => match.test(location.title))
  }else {
    locationSearched = dataLocations;
  }
  console.log(locationSearched)
  this.setState({listLocations:locationSearched, query:query.trim()})
  this.resetSelected();
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

resetSelected = (props) => {
    this.setState({
        showInfoWindow: false,
        activeMarker: null,
        selectedPlace: null,
        content:''
      })
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
        <SideBar className="App-sideBar" locations={listLocations} searchLocations={this.searchLocations} onCloseClicked={this.resetSelected} query={query} content={content} onSelectPlace={this.onSelectPlace}/>
        <MapContainer className="App-map" locations={listLocations} onCloseClicked={this.resetSelected} onMarkerClick={this.onMarkerClick} activeMarker={activeMarker} showInfoWindow={showInfoWindow} selectedPlace={selectedPlace}/>
      </div>
    );
  }
}

export default App;
