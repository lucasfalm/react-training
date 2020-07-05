import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'
import Welcome from './components/basics/Welcome'

// simpliest way to write an arrow function
export default _ => // _ with 1 param, could be (), or (props)  
        <>
            <Header />
            <Subheader name="Lucas" />
            <Welcome />
        </>
// no returns because the arrow implicitly returns the last evaluetade value