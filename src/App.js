

import React, { Component } from 'react';

import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import './css/WebpageStyle.css'

import { HashRouter as Router, Route, Link } from "react-router-dom";

import { EstimatePage } from './estimatePage';

import { IntroPage } from './IntroPage';

// import { VaccinePage } from './VaccinePage';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {

    render() {

        return (

            <Router>

              <div className="container">
                <MDBContainer>
                  <MDBBreadcrumb>
                    <MDBBreadcrumbItem><Link to="/"><span className="nav-label">Home</span></Link></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem><Link to="/Estimate_Page"><span className="nav-label">Flu Statistics</span></Link></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem><a href="./Vaccine_Page.html"><span className="nav-label">Find a Vaccine</span></a></MDBBreadcrumbItem>
                  </MDBBreadcrumb>
                </MDBContainer>
                <Route exact path="/" component={ IntroPage } />
                <Route path="/Estimate_Page" component={ EstimatePage } />
              </div>

            </Router>

            );

    }

}

{/* <i className="fa fa-bar-chart fa-sm link-icon" aria-hidden="true"></i>
<i className="fa fa-home fa-sm link-icon" aria-hidden="true"></i>
<i className="fa fa-map-marker fa-sm link-icon" aria-hidden="true"></i> */}
