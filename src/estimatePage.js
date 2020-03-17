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


  render() {

      return (
        <div id="content">
          <PageHeader />
          <Deck cardContent={[{
            cardHeader: "How Does the Flu Affect Us?",
            cardText: "Dangers of the flu are very commonly overlooked, due to the normalization of the illness. It is important for people to understand the need for vaccinations, in the context of how dangerous these outbreaks can actually be. Despite being an illness which is present each year, it can still have drastic effects on our community, if we forego precautionary measures."      
          }]}/>
          <Hospitalizations dataRef={'hospitalizations'} measurementName={'total hospitalizations for the 2018-19 flu season'} actualValue={406.06} inputs={[{'guessedHosp': "Estimate the average number of hospitalizations from the flu per population of 100,000 for the 2018-19 flu season: "}]} paragraph={"Despite the current quality of health care, influenza does still have a serious effect on the health of our communities. Despite the fact that the flu is not generally considered fatal, hospitalizations occur due to the illness every year, which people do not recognize. Test your perception of flu related hospitalizations against real data from last year's flu season below."}/>
          <Hospitalizations dataRef={'incubation'} measurementName={'days of incubation for the flu'} actualValue={3} inputs={[{'guessedInc': "Estimate the average number of days a disease is incubated: "}]} paragraph={"Many people believe the flu to be easily detectable, therefore avoidable, by the presence of symptoms. However, the flu (like all other diseases) has an incubation period in which someone may be infectious but asymptomatic."}/>
          <PageFooter />
        </div>
      );
  }
}