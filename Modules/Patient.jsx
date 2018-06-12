'use strict';

import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import axios              from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ViewPatient from '../Controllers/ViewPatient';
var Base = require('../APIspecs');

export default class Patient extends Component{
    static get propTypes(){
        return{
            patient: PropTypes.object,
            getAllPatients: PropTypes.func,
            viewPatient: PropTypes.func
        }
    }

    constructor(props){
        super(props);
        this.patient = this.props.patient;
        this.getAllPatients = this.props.getAllPatients;
        this.viewPatient = this.props.viewPatient;
    }

    delete(id){
        axios.delete(Base.nodeAPI+'/patient/'+id).then(results =>{
            this.getAllPatients();
        }).catch(err =>{
            alert(err);
        })
    }


    render(){
            return <tr>
                <td>{this.patient._id || this.patient.id}</td>
                <td>{this.patient.name}</td>
                <td>{this.patient.age}</td>
                <td>{this.patient.issue}</td>
                <td>{this.patient.priorityLevel}</td>
                <button class="btn btn-info" onClick={()=> this.viewPatient(this.patient._id)}>View</button>&nbsp;&nbsp;
                <button class="btn btn-info" onClick={()=> this.delete(this.patient._id )}>Delete</button>
            </tr>

    }
}