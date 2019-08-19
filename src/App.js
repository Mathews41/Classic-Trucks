import React from 'react'
import logo from './b0966016-7112-4835-af18-838aa468b9dc_200x200.png'
//stylesheets
import 'reset-css'
import './App.css'
import Vehicles from './components/Vehicles/Vehicles'
// import Slider from './components/Slider/Slider'





  
  function App(){
    
  return(
    <div className="app-container">
      <div className = 'navbar'>
        <img src= {logo} alt ='logo'></img>
      </div>
      
        <Vehicles/>
        {/* <Slider/> */}
      
      </div>
      
    )
  }

  





export default App;
