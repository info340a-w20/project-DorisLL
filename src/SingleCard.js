import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './css/WebpageStyle.css'

export class SingleCard extends React.Component {
    constructor(props) {
        super(props)
    }

    //this.props.header
    //this.props.text
    render() {
        return (
            <Card class = "card" bg = 'primary' border = 'primary'>
                <Card.Header class="card-header" as="h2">{this.props.header}</Card.Header>
                <Card.Body class="card-body">
                    <Card.Text>
                        {this.props.text}}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

