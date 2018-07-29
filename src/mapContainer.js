import React, { Component } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';

//import mapStyle from './mapStyle'
 
// ...
 
export class MapContainer extends React.Component {
	state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

	render(){
		const {locations} = this.props;
		  if (!this.props.loaded) {
      return <div>Loading...</div>
    }
		return(
	<Map
          google={this.props.google}
          //style={mapStyle}
          initialCenter={{
          	lat: 23.1407664,
          	lng:-82.3581826
          }}
          zoom={15.75}
          onClick={this.onMapClicked}
          >
		    {locations.map(local =>(
		    	<Marker key={local.title}
		    		title={local.title}
		    		position={local.location}
		    		onClick={this.onMarkerClick}
                /> 
		    	))}
		    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
       </Map>
       )}
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZu8GDVI_5mWqkt-kH0maxMw01y7oR-5E'
})(MapContainer)