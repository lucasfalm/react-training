import React, { useState } from 'react'
import './Input.css'

export default _ => { 
    const [data, setData] = useState()

    function change(event) { 
        setData(event.target.value)
    }

    return(
        <div className="inputArea">
            <h1> { data } </h1>
            <input value={ data } onChange={ change } />
        </div>
    )
}