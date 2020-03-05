import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Deck} from './cardDeck.js'
import {PageHeader} from './PageHeader.js'
import {PageFooter} from './PageFooter.js'
import {InputForms} from './InputForms.js'
import {EstimateBarChart} from './barChart.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/WebpageStyle.css'

export class EstimatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardContent: [{
            cardHeader: "How Does the Flu Affect Us?",
            cardText: "Dangers of the flu are very commonly overlooked, due to the normalization of the illness. It is important for people to understand the need for vaccinations, in the context of how dangerous these outbreaks can actually be. Despite being an illness which is present each year, it can still have drastic effects on our community, if we forego precautionary measures."      
      }],
      guessedInc: 0,
      allInc: [],
      actualInc: 2
    }
  }

  handleSubmit = (value) => {
    console.log("submitted");
    let newArray = this.state.allInc;
    newArray.push(value);
    let stateChanges = {
      inputtedGuess: value,
      allInc: newArray 
    }
    this.setState(stateChanges);
  }

  render() {
      const data = [{name: 'Your Estimate', value: 400}, {name: 'Average Estimate', value: 400}, {name: 'Actual Value', value: 400}];
      return (
        <div>
          <PageHeader />
          <Deck cardContent={this.state.cardContent}/>
          <InputForms inputs={
              [
                {'guessedInc': "The average number of days a disease is incubated is "}
              ]
          } onUpdate={this.handleSubmit.bind(this)}/>
          <EstimateBarChart data={data} name={"name"} value={"value"}/>
          <InputForms inputs={
              [
                {'guessedHosp': "The number of Hospitalizations from the last flu season was. . . "}
              ]
          } onUpdate={this.handleSubmit.bind(this)}/>
          <EstimateBarChart data={data} name={"name"} value={"value"}/>
          <PageFooter />
        </div>
      );
  }
}