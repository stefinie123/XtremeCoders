'use strict';

import React, {Component} from 'react';
import PropTypes from "prop-types";
import Patient from "../Modules/Patient";
import axios              from 'axios';
var Base = require('../APIspecs');

export default class ViewPatient extends Component{
    static get propTypes(){
        return{
            viewPatient: PropTypes.func,
            patient: PropTypes.object,
            name: PropTypes.string,
            age: PropTypes.number,
            issue : PropTypes.string,
            address:PropTypes.string,
            admittedBy: PropTypes.string

        }
    }

    constructor(props){
        super(props);
        this.patient = this.props.patient;
        console.log(this.patient._id);
    }

    render(){
        return <div class="container">
            <form>
                <label> Patient Name: </label>
                <input type="text" value={this.patient.name}/>
                <br/>
                <br/>
                <label> Patient Age: </label>
                <input type="text" value={this.patient.age}/>
                <br/>
                <br/>
                <label> Issue: </label>
                <input type="text" value={this.patient.issue}/>
                <br/>
                <br/>
                <label> Admitted By: </label>
                <input type="text" value={this.patient.admittedBy}/>
                <br/>
                <br/>
                <button type = "submit" class="btn btn-secondary">Update Details</button>
                <br/>
                <br/>
            </form>
        </div>
    }



}