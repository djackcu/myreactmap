import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import {mapStyle, style, apiKey, mapVal} from './mapProps'

//Map container to visualize google maps using react-google-maps (working)

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key="+apiKey,
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
    defaultOptions={{styles: mapStyle}}
  >
    {(props.showInfoWindow&&props.selectedPlace)?
          (<Marker key={props.selectedPlace.title}
            title={props.selectedPlace.title}
            position={props.selectedPlace.position}
            animation={window.google.maps.Animation.BOUNCE}
            onClick={() => props.onSelectPlace(props.selectedPlace)}>
            <InfoWindow
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

  render() {
    const {locations,showInfoWindow,selectedPlace,onCloseClicked,onSelectPlace} = this.props;
    return (
      <MyMapComponent
        locations={locations} showInfoWindow={showInfoWindow} selectedPlace={selectedPlace} onCloseClicked={onCloseClicked} onSelectPlace={onSelectPlace} 
      />
    )
  }
}
export default MyMap