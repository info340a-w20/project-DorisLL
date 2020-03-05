
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import './css/WebpageStyle.css'

export class PageFooter extends React.Component {
    render() {
        return (
            <footer>
                <h4>Contact Us:</h4>
                <nav class="contact">
                    <a href="tel:1234567890"><i class="fa fa-phone link-icon" aria-hidden="true"></i><span class="nav-label">(123)456-7890</span></a>
                    <a href="mailto:InfoStudent@UW.edu"><i class="fa fa-envelope link-icon" aria-hidden="true"></i><span class="nav-label">InfoStudent@UW.edu</span></a>
                </nav>
            </footer>
        )    
    }
}