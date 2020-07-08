import React from 'react'
import './Millions.css'

export default props => { 
    return(
        <>
            <button className="btn" onClick={ props.rangeNumbers }> Range numbers </button>
        </>
    )
}