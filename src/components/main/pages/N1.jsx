import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes,Link } from 'react-router-dom';
import bagifr from '../../../img/LIGHT.png'
import '../pages/pages.scss'
import '../../fxo/fxo.scss'
import logo from '../../../img/KIZZAFRO.png'
import one from '../../../img/1 Slide.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastMainSection from '../LastMainSection';
export default function N1(props) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
  return (
    <div className='main'>
      
      <div class="rhombus">
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="text">
        <p>CHANGE</p>
    </div>
    <div class="rhombus2">
        <div class="circle21"></div>
        <div class="circle22"></div>
    </div>
    <div class="text">
        <p>PUMP</p>
    </div>
    <div class="rhombus2">
        <div class="circle21"></div>
        <div class="circle22"></div>
    </div>
    <div class="text">
        <p>PUMP</p>
    </div>
    <div class="rhombus2">
        <div class="circle21"></div>
        <div class="circle22"></div>
    </div>
    <div class="rhombus2">
        <div class="circle21"></div>
        <div class="circle22"></div>
    </div>
        <img className='one' style={{width:'fit-content',
                      width:'1vw',
                      position: 'sticky',
                      zIndex:'20',
                    margin:'12vw auto',
                    marginBottom:'20vw',
                     display:'flex'}} src={one} alt="" />
                   
    </div>
  )
}
