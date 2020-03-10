import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import './css/WebpageStyle.css'




export class InputBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: []
      };
      this.onTagsChange = this.onTagsChange.bind(this);
    }
  
    onTagsChange = (event, values) => {
      this.setState({
        tags: values
      }, () => {
        // This will output an array of objects
        // given by Autocompelte options property.
        console.log(this.state.tags);
      });
    }

    render() {
      // const list= require('./data/csvjson.json')
        const list = [
            { title: 'The Shawshank Redemption', year: 1994 },
            {Name:'Walgreens', Address: '4710 S WESTERN AVE', City: 'Chicago', Latitude: 41.807899, Longitude: -87.684699, ZIP: 60609},
            {Name:'19th Ward Office', Address: '10402 S. Western Ave.', City: 'Chicago', Latitude: 41.70439, Longitude: -87.68197, ZIP: 60643},
            {Name:'20th Ward-Whole Foods Family Flu Day', Address: '832 W. 63rd St.', City: 'Chicago', Latitude: 41.78059, Longitude: -87.64621, ZIP: 60621},
            {Name:'Walgreens', Address: '711 W NORTH AVE STE 204', City: 'Chicago', Latitude: 41.91082, Longitude: -87.64665, ZIP: 60610}
          ];
        return (
          <div >
              <Autocomplete
                  id="input-box"
                  options={list}
                  getOptionLabel={option => option.ZIP}
                  style={{ width: "100%" }}
                  renderInput={params => <TextField {...params} label="Zipcode" variant="outlined" />}
              />
          </div>
            
        );
    }
}