import React from 'react';
import {InputForms} from './InputForms.js'
import {EstimateBarChart} from './barChart.js'
import './css/WebpageStyle.css'

//this.props.allGuesses
//this.props.actualValue
//this.props.inputs

//inputs=[{'guessedInc': "The average number of days a disease is incubated is "}]
export class Hospitalizations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          inputtedGuess: '',
          guessedInc: 0,
          allInc: this.props.allGuesses,
          renderedAverage: 0,
          actualInc: 0
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({inputtedGuess: event.target.value});
      }
    
      handleSubmit = (event) => {
        console.log("submitted");
        let submittedValue = Number(this.state.inputtedGuess);
        let newArray = this.state.allInc;
        newArray.push(submittedValue)
        let newAverage = (newArray.reduce((a,b) => a + b, 0) / newArray.length)
        console.log(newAverage)
        this.setState({
          inputtedGuess: '',
          guessedInc: submittedValue,
          allInc: newArray,
          renderedAverage: newAverage,
          actualInc: this.props.actualValue
        })
      }
    
    render(){
        return(
            <div>
                <p id="descriptive-paragraph">{this.props.paragraph}</p>
                <InputForms inputs={this.props.inputs} onUpdate={this.handleChange.bind(this)} onClick={this.handleSubmit.bind(this)}/>
                <EstimateBarChart inputtedGuess={this.state.guessedInc} averageGuess={this.state.renderedAverage} actualValue={this.state.actualInc}/>
            </div>
        )
    }    
}
