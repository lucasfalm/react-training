import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'
import Welcome from './components/basics/Welcome'
import Random from './components/basics/Random'

// simpliest way to write an arrow function
export default _ => // _ with 1 ignored param, could be (), or (props)  
        <div id="App">
            <Header />
            <Subheader name="Lucas" />
            <Welcome />
            <Random max = { 20 }  min = { 50 }></Random>
        </div>
// no returns because the arrow implicitly returns the last evaluetade value