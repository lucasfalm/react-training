import React from 'react'

export default props => {
    const { max, min } = props // js knows that props is an object, and will search .max and .min inside of it
    const rounded = ( Math.round(Math.random() * (max - min) + min) )
    const isOdd = ( rounded % 2 === 0 )

    return (
     <div>
         <strong> { rounded } </strong> 
         { isOdd ?
            <span> Odd </span> :
            <span> Even </span>
         }
     </div>
    )
}
