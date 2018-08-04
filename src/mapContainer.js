import React, { Component } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle, style, apiKey, mapVal} from './mapProps'

 
// Map container to visualize using google-maps-react(under construction for use of advanced skills)
 
class MapContainer extends Component {
	state = {
	    activeMarker: null
  	}

  	onMarkerClick = (props, marker) => {
    this.props.onSelectPlace(marker);
      this.setState({
        activeMarker: marker
      });
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
// class MarkerWithInfoWindows extends Component {
// 	state = {
// 	    activeMarker: null,
// 	    activeinfoWindow:nul
//   	}

// 	create() {
// 		const {google,mapCenter,map,visible} = this.props;
		
// 		const contentString = 'test';

        

//         let marker = new google.maps.Marker({
//           position: mapCenter,
//           map: map,
//           title: 'Center',
//           visible:visible
//         });
//         const infowindow = new google.maps.InfoWindow({
//           content: contentString,
//           maxWidth: 200
//         });
//         setState({activeMarker:marker,activeinfoWindow:infowindow})
//       	infowindow.open(map,marker)
//       	infowindow.visible = false
//       }


// 	render(){
// 		const {place,google,map,visible} = this.props;
// 		console.log(this.props)
// 		this.create();
// 		return(
// 			<div >
			
//        		</div>
//        )}
// }
 
export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)