// Map style Vintage Old Golden Brown [https://snazzymaps.com/style/126378/vintage-old-golden-brown] by beniamino nobile [http://www.beniaminonobile.me]
export const mapStyle = [
    	{
    	"featureType": "all",
			"elementType": "all",
	     	"stylers": [{ "color": "#ff7000" }, 
	     	{ "lightness": "69" }, 
	     	{ "saturation": "100" }, 
	     	{ "weight": "1.17" }, 
	     	{ "gamma": "2.04" }]
	     },{ 
	     "featureType": "all", 
	 		"elementType": "geometry", 
	     	"stylers": [{ "color": "#cb8536" }]
	     },{ 
	     "featureType": "all", 
	 		"elementType": "labels", 
	     	"stylers": [{ "color": "#ffb471" }, 
	     	{ "lightness": "66" }, 
	     	{ "saturation": "100" }]
	     },{ 
	     "featureType": "all", 
	 		"elementType": "labels.text.fill", 
	     	"stylers": [{ "gamma": 0.01 }, 
	     	{ "lightness": 20 }]
	     },{ 
	     "featureType": "all", 
	 		"elementType": "labels.text.stroke", 
	     	"stylers": [{ "saturation": -31 }, 
	     	{ "lightness": -33 }, 
	     	{ "weight": 2 }, 
	     	{ "gamma": 0.8 }]
	     },{ 
	     "featureType": "all", 
	 		"elementType": "labels.icon", 
	     	"stylers": [{ "visibility": "off" }]
	     },{ 
	     "featureType": "landscape", 
	 		"elementType": "all", 
	     	"stylers": [{ "lightness": "-8" }, 
	     	{ "gamma": "0.98" }, 
	     	{ "weight": "2.45" }, 
	     	{ "saturation": "26" }]
	     },{ 
	     "featureType": "landscape", 
	 		"elementType": "geometry", 
	     	"stylers": [{ "lightness": 30 }, 
	     	{ "saturation": 30 }]
	     },{ 
	     "featureType": "poi", 
	 		"elementType": "geometry", 
	     	"stylers": [{ "saturation": 20 }]
	     },{ 
	     "featureType": "poi.park", 
	 		"elementType": "geometry", 
	     	"stylers": [{ "lightness": 20 }, 
	     	{ "saturation": -20 }]
	     },{ 
	     "featureType": "road", 
	 		"elementType": "geometry", 
	     	"stylers": [{ "lightness": 10 }, 
	     	{ "saturation": -30 }]
	     },{ 
	     "featureType": "road", 
	 		"elementType": "geometry.stroke", 
	     	"stylers": [{ "saturation": 25 }, 
	     	{ "lightness": 25 }]
	     },{ 
	     "featureType": "water", 
	 		"elementType": "all", 
	     	"stylers": [{ "lightness": -20 }, 
	     	{ "color": "#ecc080" }]
	     }
];
//Style of container of map
export const style = {
  width: '100vw',
  height: '95vh',
  top: '5vh'
}

//Values to create map
export const apiKey = 'AIzaSyCZu8GDVI_5mWqkt-kH0maxMw01y7oR-5E'

export const googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key='

export const mapVal = {
		lat: 23.142807,
	    lng:-82.353098,
	    zoom: 15.75
}

//export default {mapStyle, style};