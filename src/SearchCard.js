import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './css/WebpageStyle.css'
import {InputBox} from './InputBox'
import ZipName from './ZipName';

export class SearchCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
          };
    }

    //Callback from InputBox and set the state input for SearchCard when button clicked
    onChangeInputValue (value) {
        this.setState({
            input: value
        })
        // this.props.changeStoredValue(this.state.input); // Callback for VaccinePage
    }

    //this.props.header
    //this.props.text
    render() {
        console.log(this.state.input)
        return (
            <Card className="vaccine-card card mb-4">
                <Card.Header className= "card-header" id="SearchCardHeader">
                    <h2>{this.props.header}</h2> 
                </Card.Header>
                <Card.Body className="card-body">
                    <div className="col-sm">
                        <Card.Text className="card-text" id="SearchCardText">
                            {this.props.text}
                        </Card.Text>
                        <InputBox items={ZipName} 
                                changeValue={this.props.changeStoredValue} // Callback for VaccinePage
                        /> 
                        <p> {this.state.input}</p>
                    </div>  
                </Card.Body>
            </Card>
        );
    }
}