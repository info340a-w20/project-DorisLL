import React from 'react';
import {SearchCard} from './SearchCard'
import {VaccineMap} from './Map'
import {ReactVirtualizedTable} from './Table'
import {PageFooter} from './PageFooter'
import {PageHeader} from './PageHeader'
import './css/WebpageStyle.css'

export class VaccinePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
          };

    }

    //Callback from InputBox and set the state input for SearchCard when button clicked
    onChangeInputValue (value) {
        this.setState({
            input: value
        })
    }
    
    render() {
        return (
            <div >
                {/* Header */}
                <div>
                    <PageHeader />
                </div>

                {/* Body */}
                <div className="row">
                    {/* Vaccine Finder Card */}
                    <div className= "text-center col-md-12 col-sm-12">
                        <SearchCard id="Vaccine-Card" header="Vaccine Finder" text="Find flu shots near you?"
                                    // changeStoredValue={this.ReturnInputValue.bind(this)}
                                    changeStoredValue={this.onChangeInputValue.bind(this)}
                                    ></SearchCard>
                    </div>

                    {/* Map + Table */}
                    <div className="container">
                        <div className="row">
                            <div className="col" id="vaccine-info" >
                                <h2 id='flu-shot-location-words' text-align="center">Flu shot providers nearby:</h2>
                                <div  className="leaflet-container">
                                    <VaccineMap zip={this.state.input}/>
                                </div>
                                <div>
                                    <ReactVirtualizedTable className="table" zip={this.state.input} id='list-providers'/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div>
                <PageFooter />
                </div>
            </div>
        );
    }
}