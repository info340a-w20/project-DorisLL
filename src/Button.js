import React from "react";
import Button from "@material-ui/core/Button";
import './css/WebpageStyle.css'


export class GoButton extends React.Component {
  onUpdate = () => {
    this.props.onClick(this.feature, this.value)
}

  constructor(props) {
    //props.color
    //props.text
    super(props);
  }
  render() {
      return (
        <button className="btn" variant="contained" color={this.props.color} text={this.props.text}>
          {this.props.text}
        </button>  
      );
  }
}