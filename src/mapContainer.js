import React, { Component } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';

import mapStyle from './mapStyle'
 
// ...
 
class MapContainer extends Component {
	render(){
		const {locations,content,onMapClicked,onMarkerClick,activeMarker,showInfoWindow,selectedPlace} = this.props;
		  if (!this.props.loaded) {
      return <div>Loading...</div>
    }
		return(
	<Map
          google={this.props.google}
          style={mapStyle}
          initialCenter={{
          	lat: 23.1407664,
          	lng:-82.3581826
          }}
          zoom={15.75}
          disableDefaultUI = {true}
          onClick={onMapClicked}
          >
		    {locations.map(local =>(
		    	<Marker key={local.title}
		    		title={local.title}
		    		position={local.location}
		    		onClick={onMarkerClick}
                /> 
		    	))}
		    <InfoWindow
          marker={activeMarker}
          //position={selectedPlace.position}
          visible={showInfoWindow}>
            <div>
              <h1>{selectedPlace.title}</h1>
              <p>{content}</p>
            </div>
        </InfoWindow>
       </Map>
       )}
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZu8GDVI_5mWqkt-kH0maxMw01y7oR-5E'
})(MapContainer)