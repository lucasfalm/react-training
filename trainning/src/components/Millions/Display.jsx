import React from 'react'
import './Millions.css'

export default props => {
    return(
        <>  
            <h3> Sorted Numbers </h3>
            <h2><strong> { props.numbers.join(" ") } </strong></h2>
        </>
    )
}