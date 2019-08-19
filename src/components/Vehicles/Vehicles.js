import React, {Component} from 'react'
import './Vehicles.css'
import VehicleDisplay from './VehicleDisplay';
import axios from 'axios'

//test

//components
export default class Vehicle extends Component {
  constructor(){
    super();

    this.state = {
      vehicles: [],
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleImage:'',

    }
  }

  componentDidMount=()=>{
      axios.get('/api/vehicles')
      .then(res =>{
          this.setState({
              vehicles: res.data
          })
      })
      .catch(err =>{
          console.log(err)
      })
  }

  handleMake(value) {
    this.setState({
      vehicleMake: value,
    })
  }
  handleModel(value) {
    this.setState({
      vehicleModel: value,
    })
  }
  handleYear(value) {
    this.setState({
      vehicleYear: value,
    })
  }
  handleImage(value) {
    this.setState({
      vehicleImage: value,
    })
  }
  handleAddVehicle = () => {
      axios.post('/api/vehicles', {make: this.state.vehicleMake, model: this.state.vehicleModel, year: this.state.vehicleYear, image: this.state.vehicleImage})
      .then(res => {
          this.setState({
              vehicles: res.data
          })
      })
      this.setState({vehicleYear: ''})
      this.setState({vehicleMake: ''})
      this.setState({vehicleModel: ''})
      
      this.setState({vehicleImage: ''})

  }

  handleDeleteVehicle = (data) => {
      this.setState({
          vehicles: data
      })
  }
  updateVehicle = (data) => {
      this.setState({
          vehicles: data
      })
  }
  
  

  render(){
      console.log(this.state)
      const mappedVehicles = this.state.vehicles.map((vehicle, i) => {
          return (
              <VehicleDisplay key = {i} vehicle = {vehicle} updateVehicle = {this.updateVehicle} deleteVehicle = {this.handleDeleteVehicle}/>
          )
      })

      return (
          <div className='Itsabox'>
              
              <div className = 'vehicles'>
                  {mappedVehicles}

              </div>
              <div className = 'addvehicleinputs'>
                  <input placeholder = 'Enter Vehicle Make' onChange = {(e) => this.handleMake(e.target.value)} value = {this.state.vehicleMake}/>
                  <input placeholder = 'Enter Vehicle Model' onChange = {(e) =>
                   this.handleModel(e.target.value)} value = {this.state.vehicleModel}/>
                  <input placeholder = 'Enter Vehicle Year' onChange = {(e) => this.handleYear(e.target.value)} value = {this.state.vehicleYear}/>
                  <input placeholder = 'Enter Image URL' onChange = {(e) => this.handleImage(e.target.value)} value = {this.state.vehicleImage}/>
                  <button onClick = {this.handleAddVehicle}>Add Vehicle</button>
              </div>
              
              <div className = 'centerImage'></div>

          </div>
      )
  }
}
