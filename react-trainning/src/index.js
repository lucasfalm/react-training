import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Header from './components/basics/Header'

const tag =  <h1> Hello world from React! </h1>

ReactDOM.render(
    
    <div> 
        <Header></Header>
        { tag }
    </div>,
    document.getElementById('root')
)