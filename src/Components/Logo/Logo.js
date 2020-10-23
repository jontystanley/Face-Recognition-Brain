import React from 'react';
import './Logo.css'
import Tilt from 'react-tilt'
import brain from './brain.png' 

const Logo=()=>{
    return(
       <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 45 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner"> <img style={{paddingTop:'10px'}} alt='logo' src={brain}/> </div>
            </Tilt>
       </div>
    );
}
export default Logo;