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
            <header className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
              <h1 className="navbar-brand"><a href="./Intro_Page.html"><i className="fa fa-stethoscope" aria-hidden="true"></i></a> The Flu Vaccine</h1>
            </header>
          </div>
        )    
    }
}