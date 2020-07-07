import React from 'react'
import './Counter.css'

export default props => { 
    return( 
        <div className="buttons">
            <button className="btn-inc" onClick={ props.inc }> + </button>
            <button className="btn-dec" onClick={ props.dec }> - </button>
        </div>
    )
}