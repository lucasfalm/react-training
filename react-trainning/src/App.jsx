import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'

export default function App(){ 
    const welcome =  <h3> Welcome to React App! </h3>
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    return(
        <>
            <Header />
            <Subheader name="Lucas" date={ time } />
            { welcome }
        </>
    )
}
