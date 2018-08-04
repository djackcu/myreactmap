import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import escapeRegExp from 'escape-string-regexp'
import MyMap from './mapComponent'
import dataLocations from './Locations'
import SideBar from './sideBar'
//import MapContainer from './mapContainer'

class App extends Component {
  state = {
    listLocations:[],
    query:'',
    showInfoWindow: false,
    selectedPlace: null
  }
componentDidMount(){
    this.setState({listLocations:dataLocations})
}
//Fetch data from Wikipedia using jsonp
getData = (place) =>{
  const {title} = place;
  const urlTitle = title.replace(/\s/gm,'%20')
  const api = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&exsentence=3&exlimit=1&explaintext=1&titles='+ urlTitle;
  return fetchJsonp(api)
  .then((response) =>response.json())
  .then(data => data.query.pages[0].extract.split('==')[0])
  .catch((err) => {
    const content ='Description no available';
    console.log(err);
    return content;
  });
}
//Search in the list of locations
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
//Deselect location and view all locations
resetSelected = (props) => {
    this.setState({
        showInfoWindow: false,
        selectedPlace: null
      })
    };
//Selecting location
onSelectPlace = (place) => {
    const {title,position} = place;
    this.getData(place)
    .then((content) => {
      this.setState({
          selectedPlace:{title,position,content},
        });
    });
//Delay while the data is fetched
    setTimeout(() => {
      this.setState({ showInfoWindow: true })
    }, 1000)
  }
  
  render() {
    const {listLocations, query,showInfoWindow,selectedPlace} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Old Havana City</h1>
        </header>
        <SideBar className="App-sideBar" locations={listLocations} searchLocations={this.searchLocations} onCloseClicked={this.resetSelected} query={query} selectedPlace={selectedPlace} onSelectPlace={this.onSelectPlace}/>
        <MyMap className="App-map" locations={listLocations} onCloseClicked={this.resetSelected} onSelectPlace={this.onSelectPlace} showInfoWindow={showInfoWindow} selectedPlace={selectedPlace}/>
      </div>
    );
  }
}

//<MapContainer className="App-map" locations={listLocations} onCloseClicked={this.resetSelected} onSelectPlace={this.onSelectPlace} showInfoWindow={showInfoWindow} selectedPlace={selectedPlace}/>
export default App;
