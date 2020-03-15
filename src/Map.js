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

  render() {
    let selected = [];
    let longLatGroup = [];
    let wants = this.props.zip;
    for (var i = 0; i < data.length; i++) {
      let selectedSingle = data[i];
      if (selectedSingle.ZIP == wants) {
        selected.push(selectedSingle);
        let longLat = [];
        longLat.push(selectedSingle.Latitude);
        longLat.push(selectedSingle.Longitude);
        longLatGroup.push(longLat);
      }
    }
    let bound;
    if (longLatGroup.length == 0) {
      bound = window.L.latLngBounds([[19.50139, -161.75583], [64.85694, -68.01197]])
    } else {
      bound = window.L.latLngBounds(longLatGroup)
    }

    return (
      <Map center={[40,-97]} zoom={4} bounds={bound}>
        <TileLayer
        url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh'
        attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      createMarkers();
      {selected.map(marker => (
        <Marker position={[marker.Latitude, marker.Longitude]}>
          <Popup>{marker.Name}<br/>{marker.City}</Popup>
        </Marker>
      ))}
      </Map>
    )
  }
}