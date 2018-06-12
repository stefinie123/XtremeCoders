'use strict';

import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import Patient            from './Patient.jsx';

export default class Patients extends Component{
    static get propTypes(){
        return {
            patients: PropTypes.array,
            viewPatient: PropTypes.func
        }
    }

    constructor(props){
        super(props);
        this.viewPatient = this.props.viewPatient;
        console.log(this.viewPatient);
    }

    componenetWillRecieveProps(props){
        this.setState(props)
    }

    render(){
        this.patients = this.props.patients;
        return <div>
            <table class="table">
                <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Issue</th>
                    <th>Condition</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.patients.map(patient => {
                        return <Patient key={patient._id || patient.id} patient ={patient} getAllPatients={()=> this.props.getAllPatients} viewPatient={()=> this.props.viewPatient(patient._id || patient.id)}/>
                    })
                }
                </tbody>
            </table>
        </div>
    }
}