import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'
import Welcome from './components/basics/Welcome'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

// simpliest way to write an arrow function
export default _ => // _ with 1 ignored param, could be (), or (props)  
        <div id="App">
            <Card title="Welcome Name"> 
                <Header />
            </Card>

            <Card title="Welcome Name"> 
                <Subheader name="Lucas" />
            </Card>

            <Card title="Welcome"> 
                <Welcome />
            </Card>

            <Card title="Random"> 
                <Random max = { 20 }  min = { 50 } />
            </Card>
        </div>
// no returns because the arrow implicitly returns the last evaluetade value