import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon, FeatureGroup } from "leaflet";
import './css/WebpageStyle.css';

const data = require('./data/csvjson.json')
export class VaccineMap extends React.Component {
  

  render() {

    let selected = [];
    let wants = 60601 //this.props.input; //Q: how to pass the value from two-layers deeper to here?
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
      {selected.map(marker => (
        <Marker key= {marker.Name} position={[marker.Latitude, marker.Longitude]} />
      ))}
      </Map>
    )
  }
}
