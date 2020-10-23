import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';

const particleOptions={
    particles: {
      number:{
        value: 90,
        density:{
          enable:true,
          value_area:800

        }
      }
    }
  }
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputChange =(event)=>{
    console.log(event.target.value);
  }

  onButtonSubmit=()=>{
    console.log('click');
  }
  render(){
  return (
    <div className="App">
      <Particles className='particles' 
              params={particleOptions}
            />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/* <FaceRecognition/> */}
    </div>
    );
  }
}
export default App;
