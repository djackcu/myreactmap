import React, { Component } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import mapStyle from './mapStyle'

 
// ...
 
class MapContainer extends Component {
	fetchPlaces(mapProps, map) {
		  const {google} = mapProps;
		  const service = new google.maps.places.PlacesService(map);
		  // ...
		}

	render(){
		const {locations,onCloseClicked,onMarkerClick,activeMarker,showInfoWindow,selectedPlace} = this.props;
		  if (!this.props.loaded) {
      return <div>Loading...</div>
    }
		return(
	<Map
          google={this.props.google}
          styles={mapStyle}
          onReady={this.fetchPlaces}
          initialCenter={{
          	lat: 23.1463989,
          	lng:-82.3551359
          }}
          zoom={15.75}
          disableDefaultUI = {true}
          onClick={onCloseClicked}
          >
		    {selectedPlace?
		    	(<Marker key={selectedPlace.title}
		    		title={selectedPlace.title}
		    		position={selectedPlace.position}
		    		animation={this.props.google.maps.Animation.BOUNCE}
		    		onClick={onMarkerClick}
		    	/>):
		    	(locations.map(local =>(
			    	<Marker key={local.title}
			    		title={local.title}
			    		position={local.position}
			    		onClick={onMarkerClick}
			    	/> 
		    	)))}
		    <InfoWindow
	          marker={activeMarker}
	          visible={showInfoWindow}
	          onClose={onCloseClicked}
	          >
	        	{selectedPlace?
		            (<div>
		              <h2>{selectedPlace.title}</h2>
		              <p>adresse</p>
		            </div>):(<p>No info</p>)
	        	}
		    </InfoWindow>
       </Map>
       )}
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZu8GDVI_5mWqkt-kH0maxMw01y7oR-5E'
})(MapContainer)