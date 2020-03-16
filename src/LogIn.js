import React from 'react';
import {PageFooter} from './PageFooter'
import {PageHeader} from './PageHeader'
import {Card} from 'react-bootstrap';
import './css/WebpageStyle.css'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LogIn(props) {
    return (
        <div>
            {/* Header */}
            <div>
                <PageHeader />
            </div>

            {/* Body */}
            <Card className="card">
                <Card.Header className="card-header" as="h2" id="card-header">Welcome to Flu Preventing Website!</Card.Header>
                <Card.Body className="card-body">
                    <p id="logIn-Text">Please Sign-In with Google Account</p>
                    <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={props.fbAuth()}/>
                    </Card.Body>
            </Card>

            {/* Footer */}
            <div>
            <PageFooter />
            </div>
        </div>


    )
}