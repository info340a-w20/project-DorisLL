import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import './css/WebpageStyle.css'

export class EstimateBarChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //expects an array of objects
        //this.props.data will either be incubation
        return (
            <div>
                <BarChart width={600} height={300} data={this.props.data}>
                  <XAxis dataKey={this.props.name}/>
                  <YAxis />
                  <Bar type="monotone" dataKey={this.props.value} barSize={30} fill="#8884d8"/>
                </BarChart>
            </div>
        )
    }
}