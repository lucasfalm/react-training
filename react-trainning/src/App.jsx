import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'
import Welcome from './components/basics/Welcome'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import './App.css'

// simpliest way to write an arrow function
export default _ => // _ with 1 ignored param, could be (), or (props)  
        <div className="App">
            <div className="Cards">
                <Card title="Header" color="black"> 
                    <Header />
                </Card>

                <Card title="Welcome Name" color="green"> 
                    <Subheader name="Lucas" />
                </Card>

                <Card title="Welcome without props"> 
                    <Welcome />
                </Card>

                <Card title="Random" color="purple"> 
                    <Random max = { 20 }  min = { 50 } />
                </Card>
            </div>
        </div>
// no returns because the arrow implicitly returns the last evaluetade value