import React from 'react'
import './Counter.css'

export default props => { 
    return(
        <div className="display">
             <h2> { props.count } </h2>
        </div>
    )
}