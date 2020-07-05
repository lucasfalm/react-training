import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Header from './components/basics/Header'
import Subheader from  './components/basics/Subheader'

const tag =  <h3> Welcome to React App! </h3>
var today = new Date()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

ReactDOM.render(
    <div> 
        <Header></Header>
        <Subheader name="Lucas" date={ time }></Subheader>
        { tag }
    </div>,
    document.getElementById('root')
)