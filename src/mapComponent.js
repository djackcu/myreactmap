import React from "react"
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {mapStyle, style, apiKey, mapVal} from './mapProps'

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
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default MyMap