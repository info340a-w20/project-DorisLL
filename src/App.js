   

import React, { Component } from 'react';

import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";

import { EstimatePage } from './estimatePage';

import { IntroPage } from './IntroPage';

import { VaccinePage } from './VaccinePage';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {

    render() {

        return (

            <Router>

              <div className="container">

                <Link to="/">Home</Link>
                <Link to="/Estimate_Page">Estimate Page</Link>
                <Route exact path="/" component={ IntroPage } />
                <Route path="/Estimate_Page" component={ EstimatePage } />
                <Route exact path="/" component={ IntroPage } />
                <Route path="/Vaccine_page" component={ VaccinePage } />

              </div>

            </Router>

            );

    }

}

