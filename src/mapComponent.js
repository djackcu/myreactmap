import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import {mapStyle, style, apiKey, mapVal,googleMapsUrl} from './mapProps'


//Map container to visualize google maps using react-google-maps (working)

const Map = compose(
  withProps({
    googleMapURL: googleMapsUrl+apiKey,
    loadingElement: <div style={style} />,
    containerElement: <div style={style} />,
    mapElement: <div style={style} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={mapVal.zoom}
    defaultCenter={{ lat: mapVal.lat, lng: mapVal.lng }}
    onClick={props.onCloseClicked}
    defaultOptions={{styles: mapStyle,disableDefaultUI: true}}
  >
    {(props.showInfoWindow&&props.selectedPlace)?
          (<Marker key={props.selectedPlace.title}
            title={props.selectedPlace.title}
            position={props.selectedPlace.position}
            animation={window.google.maps.Animation.BOUNCE}
            onClick={() => props.onSelectPlace(props.selectedPlace)}>
            <InfoWindow
            className="description"
            onCloseClick={props.onCloseClicked}
            >
            {props.selectedPlace?
                (<div>
                  <h2>{props.selectedPlace.title}</h2>
                  <p>{props.selectedPlace.content}</p>
                </div>):(<p>No info</p>)
            }
        </InfoWindow>
          </Marker>):
          (props.locations.map(local =>(
            <Marker key={local.title}
              title={local.title}
              position={local.position}
              onClick={() => props.onSelectPlace(local)}
            /> 
          )))}
  </GoogleMap>
)

class MyMap extends React.PureComponent {
constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
//catching error with Google Maps Apikey
 gm_authFailure(e) {
   window.alert('Error with Google Maps' );
 }

//Handling error on load Map
componentDidCatch(error, info) {
   // Display fallback UI
  this.setState({ hasError: true });
    console.log(error, info);
}

render() {
    const {locations,showInfoWindow,selectedPlace,onCloseClicked,onSelectPlace} = this.props;
    
    window.gm_authFailure = this.gm_authFailure;
    
  if (this.state.hasError) {
    return (<div class="alert" role="alert">Something went wrong with Google Maps</div>)
  }else{
    return (
      <Map
        locations={locations} 
        showInfoWindow={showInfoWindow} 
        selectedPlace={selectedPlace} 
        onCloseClicked={onCloseClicked} 
        onSelectPlace={onSelectPlace} 
      />)
    }
}
}
export default MyMap