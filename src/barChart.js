import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import './css/WebpageStyle.css'

export class EstimateBarChart extends React.Component {
    constructor(props) {
        super(props)
    }

    //expects stateObject

    render() {
        //expects an array of objects
        //this.props.data will either be incubation
        let data = [{name: 'Your Estimate', value: this.props.inputtedGuess}, {name: 'Average Estimate', value: this.props.averageGuess}, {name: 'Actual Value', value: this.props.actualValue}];
        return (
            <div>
                <BarChart width={600} height={300} data={data}>
                  <XAxis dataKey="name"/>
                  <YAxis />
                  <Bar type="monotone" dataKey="value" barSize={30} fill="navy" />
                </BarChart>
            </div>
        )
    }
}