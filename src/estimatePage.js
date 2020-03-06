import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Deck} from './cardDeck.js'
import {PageHeader} from './PageHeader.js'
import {PageFooter} from './PageFooter.js'
import {InputForms} from './InputForms.js'
import {EstimateBarChart} from './barChart.js'
import {Hospitalizations} from './hospitalizations.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/WebpageStyle.css'

export class EstimatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputtedGuess: '',
      guessedInc: 0,
      allInc: [],
      actualInc: 0
    }
  }

  render() {
      const data = [{name: 'Your Estimate', value: 400}, {name: 'Average Estimate', value: 400}, {name: 'Actual Value', value: 400}];
      console.log("current state: " + this.state.guessedInc
                  + "allguesses: " + this.state.allInc);
      return (
        <div id="content">
          <PageHeader />
          <Deck cardContent={[{
            cardHeader: "How Does the Flu Affect Us?",
            cardText: "Dangers of the flu are very commonly overlooked, due to the normalization of the illness. It is important for people to understand the need for vaccinations, in the context of how dangerous these outbreaks can actually be. Despite being an illness which is present each year, it can still have drastic effects on our community, if we forego precautionary measures."      
          }]}/>
          <Hospitalizations allGuesses={[100, 300, 600, 642, 796, 88]} actualValue={406.06} inputs={[{'guessedHosp': "Estimate the average number of hospitalizations from the flu per population of 100,000: "}]} paragraph={"Despite the current quality of health care, influenza does still have a serious effect on the health of our communities. Despite the fact that the flu is not generally considered fatal, hospitalizations occur due to the illness every year, which people do not recognize. Test your perception of flu related hospitalizations against real data from last year's flu season below."}/>
          <Hospitalizations allGuesses={[1, 2, 3, 5, 2, 5]} actualValue={3} inputs={[{'guessedInc': "Estimate the average number of days a disease is incubated: "}]} paragraph={"Dangers of the flu are very commonly overlooked, due to the normalization of the illness. It is important for people to understand the need for vaccinations, in the context of how dangerous these outbreaks can actually be. Despite being an illness which is present each year, it can still have drastic effects on our community, if we forego precautionary measures."}/>
          <PageFooter />
        </div>
      );
  }
}