import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Icon, FeatureGroup } from "leaflet";
// import MarkerClusterGroup from 'react-leaflet-markercluster';

import './css/WebpageStyle.css';


const data = require('./data/csvjson.json')

export class VaccineMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        input: '',
      };
}

  upDateInputValue () { // Save the selected zip from props (passing in from VaccinePage) and save as state
    let propsValue = this.props.zip
    this.setState({
        input: propsValue
    })
  }


  // createMarkers() {
  //   let selected = [];
  //   let wants = this.props.zip; //Q: how to pass the value from two-layers deeper to here?
  //   for (var i = 0; i < data.length; i++) {
  //     let selectedSingle = data[i];
  //     if (selectedSingle.ZIP == wants) {
  //       selected.push(selectedSingle);
  //     }
  //   }

  //   return (
  //     <FeatureGroup ref={this.groupRef}>
  //         {selected.map(marker => (
  //           <Marker key= {marker.Name} position={[marker.Latitude, marker.Longitude]}>
  //           <Popup>
  //             <span>
  //               <h4>{marker.name}</h4>
  //             </span>
  //           </Popup>
  //           </Marker>
  //         ))}
  //   </FeatureGroup>

      // <div>
      //   {selected.map(marker => (
      //     <Marker key= {marker.Name} position={[marker.Latitude, marker.Longitude]}></Marker>
      //   ))}

      // </div>
  //   )
  // }

  render() {

    let selected = [];
    let wants = this.props.zip; //Q: how to pass the value from two-layers deeper to here?
    for (var i = 0; i < data.length; i++) {
      let selectedSingle = data[i];
      if (selectedSingle.ZIP == wants) {
        selected.push(selectedSingle);
      }
    }

    return (
      <Map center={[40,-97]} zoom={4}>
        <TileLayer
        url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh'
        attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      createMarkers();
      {selected.map(marker => (
        <Marker key= {marker.Name} position={[marker.Latitude, marker.Longitude]} />
      ))}
      </Map>
    )
  }
}
