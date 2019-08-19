import React, {Component} from 'react'
import './Vehicles.css'
import axios from 'axios';
import * as Icon from 'react-feather'


export default class VehicleDisplay extends Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            editVehicleMake: '',
            editVehicleModel: '',
            editVehicleYear: '',
            editVehicleImage: '',
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdateVehicle = (id) => {
        console.log(id)
        let updatedVehicle = {
            id,
            make: this.state.editVehicleMake,
            model: this.state.editVehicleModel,
            year: this.state.editVehicleYear,
            image: this.state.editVehicleImage
        }
        axios.put(`/api/vehicles/${id}`, updatedVehicle)
        .then(res => {
            this.props.updateVehicle(res.data)
            this.handleToggle()
        })
    }

    handleDeleteVehicle = () => {
        axios.delete(`/api/vehicles/${this.props.vehicle.id}`)
        .then(res => {
            this.props.deleteVehicle(res.data)
            if(this.state.edit){
            this.handleToggle()
            }
        })
    }


    render(){
        return (
            <div className="otherbox">
                {!this.state.edit
                ?
                ( <div className="mainvehiclebox">
                <div className = 'vehicle-boxes'>
                    <div className='htags'>
                
                <h5 className = 'vehicle-make'>{this.props.vehicle.make} </h5>
                <h5 className = 'vehicle-model'>{this.props.vehicle.model} </h5>
                <h5 className = 'vehicle-year'>{this.props.vehicle.year} </h5>
                <h6 className = 'vehicle-Url'>{this.props.vehicle.Url} </h6>
                </div>

                <img src = {this.props.vehicle.image} alt = 'Vehicles'/>
                <div className = 'vehiclebuttons'>
                <Icon.Edit className='editbutton' onClick = {this.handleToggle}/>
                <Icon.Trash2 className='trashcan'onClick = {() => this.handleDeleteVehicle(this.props.vehicle.id)}/>
                
                </div>
                </div>
                </div>
                )
        
                 :

                 (<div className= 'editvehicleinputs' >
                <input name='editVehicleMake' placeholder = 'Edit Vehicle Make Here' onChange = {(e) => this.handleInput(e)} value = {this.state.editMake}/>
                <input name='editVehicleModel' placeholder = 'Edit Vehicle Model Here' onChange = {(e) => this.handleInput(e)} value = {this.state.editModel}/>
                <input name='editVehicleYear' placeholder = 'Edit Vehicle Year Here' onChange = {(e) => this.handleInput(e)} value = {this.state.editYear}/>
                <input name='editVehicleImage' placeholder = 'Edit Vehicle Url Here' onChange = {(e) => this.handleInput(e)} value = {this.state.editUrl}/>
                <button onClick = {() =>this.handleUpdateVehicle(this.props.vehicle.id)}> Submit Edit</button>
                </div>)
                }
                
            </div>
        )
    }
}