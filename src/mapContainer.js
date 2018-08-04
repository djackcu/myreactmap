import React, { Component } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle, style, apiKey, mapVal} from './mapProps'

 
// ...
 
class MapContainer extends Component {
	state = {
	    activeMarker: null,
	    map:{}
  	}

	fetchPlaces(mapProps, map) {
		console.log(map);
		//const {google} = mapProps;
		//const service = new google.maps.places.PlacesService(map);
		// ...
		}

  	onMarkerClick = (props, marker) => {
    this.props.onSelectPlace(marker);
      this.setState({
        activeMarker: marker
      });
      console.log(this.props.google);
    }


	render(){
		const {locations,onCloseClicked,showInfoWindow,selectedPlace} = this.props;
		  if (!this.props.loaded) {
      return <div>Loading...</div>
    }
		return(
			<div className="App-map">
		<Map 
          google={this.props.google}
          style={style}
          styles={mapStyle}
          onReady={this.fetchPlaces}
          initialCenter={{
          	lat: mapVal.lat,
          	lng: mapVal.lng
          }}
          zoom={mapVal.zoom}
          disableDefaultUI = {true}
          onClick={onCloseClicked}
          >
		    {(showInfoWindow&&selectedPlace)?
		    	(<Marker key={selectedPlace.title}
		    		title={selectedPlace.title}
		    		position={selectedPlace.position}
		    		animation={this.props.google.maps.Animation.BOUNCE}
		    		onClick={this.onMarkerClick}
		    	/>):
		    	(locations.map(local =>(
			    	<Marker key={local.title}
			    		title={local.title}
			    		position={local.position}
			    		onClick={this.onMarkerClick}
			    	/> 
		    	)))}
		    <InfoWindow
	          marker={this.state.activeMarker}
	          visible={showInfoWindow}
	          onClose={onCloseClicked}
	          >
	        	{selectedPlace?
		            (<div>
		              <h2>{selectedPlace.title}</h2>
		            </div>):(<p>No info</p>)
	        	}
		    </InfoWindow>
       </Map>
       </div>
       )}
}
 
export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)