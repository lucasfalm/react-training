import ReactDOM from 'react-dom'
import React from 'react'

const tag =  <h1> Hello world from React! </h1>
ReactDOM.render(
    <div> { tag } </div>,
    document.getElementById('root')
)