import React, { Component } from 'react';

import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import './css/WebpageStyle.css'

import { HashRouter as Router, Redirect, Route, Link } from "react-router-dom";
import { EstimatePage } from './estimatePage';
import { IntroPage } from './IntroPage';
import { VaccinePage } from './VaccinePage';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import firebase and StyledFirebaseAuth
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LogIn from './LogIn';

// Configure Firebase (get configuration from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDZRrWIFCCG5zDIR1xU9SpuPG6PNs6NuJg",
  authDomain: "info430-flu-website.firebaseapp.com",
  databaseURL: "https://info430-flu-website.firebaseio.com",
  projectId: "info430-flu-website",
  storageBucket: "info430-flu-website.appspot.com",
  messagingSenderId: "508636748505",
  appId: "1:508636748505:web:668dedbd0f2166156dfcc8",
  measurementId: "G-KBV16ZWHT6"
};

// Initialize your application with the given configuration
firebase.initializeApp(firebaseConfig);

// Set UI config for sign in (see: https://github.com/firebase/firebaseui-web-react)
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false, // Local signed-in state.
    }
  }

    // See: https://github.com/firebase/firebaseui-web-react#using-firebaseauth-with-local-state
  componentDidMount() {
    // Store the AuthObserver (so you can unauthorize the application)
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
  );
    // Set the state of `isSignedIn`

    // Make a reference to this particular user in the `favorites/` reference

    // When the value at the "favorites/user.uid" reference changes, 
    // change the state of "favorites" to be the value stored at that reference
    
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
      this.unregisterAuthObserver();
  }






  render() {
      // If the state is not currently signed in, return a simple sign in screen
      // See: https://github.com/firebase/firebaseui-web-react#using-styledfirebaseauth-with-a-redirect  

      return (

          <Router>

            <div className="container">
              <MDBContainer>
                <MDBBreadcrumb>
                  <MDBBreadcrumbItem><Link to="/"><span className="nav-label">Home</span></Link></MDBBreadcrumbItem>
                  <MDBBreadcrumbItem><Link to="/Estimate_Page"><span className="nav-label">Flu Statistics</span></Link></MDBBreadcrumbItem>
                  <MDBBreadcrumbItem><Link to="/Vaccine_Page"><span className="nav-label">Find a Vaccine</span></Link></MDBBreadcrumbItem>
                {/* Add an onClick event to signOut of the application*/}                            
                <MDBBreadcrumbItem onClick = {() => firebase.auth().signOut()} style={{ position: "fixed", right: "10px", 
                                        color:"white"}}><span className="nav-label">Sign-out</span></MDBBreadcrumbItem>
                </MDBBreadcrumb >
              </MDBContainer>

              <Route path="/signIn" component={ LogIn } >
                {!!firebase.auth().currentUser ? <Redirect to="/" /> : <LogIn uiConfig ={uiConfig} fbAuth = {firebase.auth}/> } 
              </Route>
              <Route exact path="/" component={ IntroPage }>
                {!!firebase.auth().currentUser ? <IntroPage /> : <Redirect to="/signIn" />}
              </Route>
              <Route path="/Estimate_Page" component={ EstimatePage }>
                {!!firebase.auth().currentUser ? <EstimatePage /> : <Redirect to="/signIn" />}
              </Route>
              <Route path="/Vaccine_Page" component={ VaccinePage }>
                {!!firebase.auth().currentUser ? <VaccinePage /> : <Redirect to="/signIn" />}
              </Route>
            </div>
          </Router>
      );

  }

}

{/* <i className="fa fa-bar-chart fa-sm link-icon" aria-hidden="true"></i>
<i className="fa fa-home fa-sm link-icon" aria-hidden="true"></i>
<i className="fa fa-map-marker fa-sm link-icon" aria-hidden="true"></i> */}