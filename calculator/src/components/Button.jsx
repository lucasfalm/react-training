import React from 'react'
import './Button.css'

export default props => { 
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.column ? 'column' : ''
    classes += props.row ? 'row' : ''
    return (
        <>
            <button 
                className={classes}
                onClick={ e => props.click(e.target.innerHTML)}
            >
                { props.label }
            </button>
        </>
    )
}