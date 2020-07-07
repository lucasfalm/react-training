import React, { useState } from 'react'

export default props => { 
     
    return(
        <>
            <span> How much </span>
            <input
                onChange={ e => props.setStep(+e.target.value)}
                value={ props.count }
            />
        </>
    )
}