import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SingleCard} from './SingleCard.js'
import CardDeck from 'react-bootstrap/CardDeck'

export class Deck extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //will accept this.props.cardContent that is an array of ojects with {cardHeader: , cardText: }
        let cards = [];
        this.props.cardContent.forEach((card) => {
            let newCard = <SingleCard header = {card.cardHeader} text = {card.cardText} />
            cards.push(newCard);
        });

        return (
            <CardDeck>
                {cards}
            </CardDeck>
        );
    }
}