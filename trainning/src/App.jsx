import React from 'react'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'
import Welcome from './components/basics/Welcome'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Cannabis from './components/basics/Cannabis'
import Weed from './components/basics/Weed'
import Iterator from './components/rangeLists/Iterator'
import Products from './components/rangeLists/Products'
import Say from './components/basics/Say'
import FatherSon from './components/relationship/FatherSon'
import SonFather from './components/relationship/SonFather'
import Son from './components/relationship/SonProps'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Millions from './components/Millions/Millions'

import './App.css'

// simpliest way to write an arrow function
export default _ => // _ with 1 ignored param, could be (), or (props)  
        <div className="App">
            <div className="Cards">
                <Card title="Header" color="#00ff40"> 
                    <Header />
                </Card>
                
                <Card title="Millions" color="#eeae15"> 
                   <Millions />
                </Card>

                <Card title="Welcome Name" color="#8503ff"> 
                    <Subheader name="Lucas" />
                </Card>

                <Card title="Counter" color="#00ff40"> 
                    <Counter step={ 10 } />
                </Card>

                <Card title="Controlled component" color="#303030"> 
                    <Input />
                </Card>

                <Card title="Direct comunication (props)" color="#184C69"> 
                    <FatherSon lastname="Feijo">
                        <Son name="Lucas" />
                        <Son name="Neusa" />
                    </FatherSon>
                </Card>

                <Card title="Indirect comunication (state)" color="#2f1c42"> 
                    <SonFather />
                </Card>

                <Card title="Welcome without props" color=""> 
                    <Welcome />
                </Card>
    
                <Card title="Say something" color="#0d4a6f"> 
                    <Say something={{ what: 'Hey dude!' }}/>
                </Card>

                <Card title="Random" color="#e26d5a"> 
                    <Random max = { 20 }  min = { 50 } />
                </Card>

                <Card title="Props children" color="#354228"> 
                    <Cannabis typeName="Sativa">
                        <Weed flowerName="Gorilla Haze" />
                        <Weed flowerName="Nothernligth" />
                    </Cannabis>
                </Card>

                <Card title="Iterator" color="#51eae6"> 
                    <Iterator />
                </Card>

                <Card title="Products" color="#23170f"> 
                    <Products />
                </Card>
            </div>
        </div>
// no returns because the arrow implicitly returns the last evaluetade value