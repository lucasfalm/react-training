import React from 'react'
import './Millions.css'

export default props => {     
    return( 
        <>
             <p className="input"> How many numbers? </p>
             <input onChange={ e => {props.setRange(+e.target.value)}} value={ props.count } />
        </>
    )
}