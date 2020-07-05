import React from 'react'

export default (props) => {
    const { max, min } = props // js knows that props is an object, and will search .max and .min inside of it
    return Math.round(Math.random() * (max - min) + min)
}
