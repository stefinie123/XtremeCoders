'use strict';

import React, {Component} from 'react';
import AddPatient from '../Controllers/AddPatient';
import Patients  from '../Modules/Patients';
import ViewPatient from '../Controllers/ViewPatient';
import axios from 'axios';
import Base from '../APIspecs';

export default class RegistrationView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            view: false
        }
        this.getAllPatients();
        this.patient = null;
    }

    getAllPatients(){
        axios.get(Base.nodeAPI+'/patient/').then(res =>{
            this.setState({
                patients: res.data.data || res.data
            });

        })
    }

    addPatient(patient){
        console.log("inside add");
        axios.post(Base.nodeAPI+'/patient/',{name: patient.name, age: patient.age, issue: patient.issue, priorityLevel: patient.priorityLevel}).then(result =>{
            $("input").val("");
            this.getAllPatients();
            if(result.status == 200){
                //this.getAllPatients();
            }
        }).catch(err =>{
            alert(err);
        })
    }

    viewPatient(id) {
        console.log("inside view")
        axios.get(Base.nodeAPI + '/patient/' + id).then(results => {
            this.patient = results.data[0];
            console.log(results.data[0]);
            this.setState({
                view: true
            })
        }).catch(err => {
            alert(err);
        })
    }

    render() {
        if(this.state.view){
            return <div>
                <div className="jumbotron text-center">
                    <h2>Patient Registration details</h2>
                </div>
                <div className="container">
                    <ViewPatient patient={this.patient}/>
                </div>
            </div>

        }
        else{
            return <div>
                <div className="jumbotron text-center">
                    <h2>Patient Registration details</h2>
                </div>
                <div className="container">
                    <AddPatient addPatient={patient => this.addPatient(patient)}/>
                    <Patients patients={this.state.patients} getAllPatients={() => this.getAllPatients()} viewPatient={patient => this.viewPatient(patient._id || patient.id)}/>
                </div>
            </div>;
        }

    }
}