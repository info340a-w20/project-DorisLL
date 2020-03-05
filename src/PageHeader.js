import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import './css/WebpageStyle.css'

export class PageHeader extends React.Component {
    render() {
        return (
          <div>
            <header className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand"><a href="./Intro_Page.html"><i className="fa fa-stethoscope" aria-hidden="true"></i></a> The Flu Vaccine</h1>
            </header>
              <MDBContainer>
                <MDBBreadcrumb>
                  <MDBBreadcrumbItem><a href="./Intro_Page.html"><span className="nav-label">Home</span> <i className="fa fa-home fa-sm link-icon" aria-hidden="true"></i></a></MDBBreadcrumbItem>
                  <MDBBreadcrumbItem><a href="./Estimate_Page.html"><span className="nav-label">Flu Statistics</span> <i className="fa fa-bar-chart link-icon" aria-hidden="true"></i></a></MDBBreadcrumbItem>
                  <MDBBreadcrumbItem><a href="./Vaccine_Page.html"><span className="nav-label">Find a Vaccine</span><i className="fa fa-map-marker link-icon" aria-hidden="true"></i></a></MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBContainer>
          </div>
        )    
    }
}