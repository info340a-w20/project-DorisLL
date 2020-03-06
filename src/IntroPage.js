import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Deck} from './cardDeck.js'
import {PageHeader} from './PageHeader.js'
import {PageFooter} from './PageFooter.js'

export class IntroPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardContent: [{
                cardHeader:'Who should get a vaccine?' ,
                cardText: 'Everyone 6 months and older should get a flu vaccination to prevent the spread of illness.'
            },{
                cardHeader:'Why Get a Vaccine?' ,
                cardText: 'The flu shot not only protecrs you from getting sick, but others who are more susceptible to the disease.'
            },{
                cardHeader:'How Common is the Flu?' ,
                cardText: 'On average, 5%-20% of the United States will be infected by the flu.'
            },{
                cardHeader:'When is the Flu Most Common?' ,
                cardText: 'The peak season of the flu occurs during the months of December-February.'
            }]
        }
    }
    render() {
        const data = [{name: 'Your Estimate', value: 400}, {name: 'Average Estimate', value: 400}, {name: 'Actual Value', value: 400}];
        return (
          <div>
            <PageHeader />
            <Deck id="homepage-cards" cardContent={this.state.cardContent}/>
            
            <PageFooter />
          </div>
        );
    }
}

