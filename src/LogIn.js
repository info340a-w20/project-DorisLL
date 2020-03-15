import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LogIn(props) {
    return (
        <div>
            <h1>Get to know more about Flu!!!</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={props.fbAuth()}/>
      </div>

    )
}