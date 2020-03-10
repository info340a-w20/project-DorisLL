// import React from "react";
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: ${props => props.width};
//   height: ${props => props.height};
// `
// //Sucessfully map appear
// export class VaccineMap extends React.Component {
//   componentDidMount() {
//     this.map = L.map('map', {
//       center:[58, 16],
//       zoom: 6,
//       zoomControl: false
//     });

//     L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh', {
//                 detectRetina: true, maxZoom: 20, maxNativeZoom: 17, 
//                 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//                 }).addTo(this.map);
//   }

//   render() {
//     return <Wrapper width="100%" height="400px" id="map" />
//   }
// }


// import React from 'react'
// // import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// const position = [51.505, -0.09]
// export class VaccineMap extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }

// render () {
//   return (
//     <Map id="map" center= {position} zoom={1}>
//       <TileLayer
//       url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh'
//       attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//     />
//     {/* <Marker position={position}>
//       {/* <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup> */}
//     {/* </Marker> */} 
//     </Map>
//   )
// }
// }


import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import './css/WebpageStyle.css';

export class VaccineMap extends React.Component {
render() {
  return (
    <Map center={[40,-97]} zoom={4}>
       <TileLayer
      url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh'
      attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
    </Map>
  )
}
}
