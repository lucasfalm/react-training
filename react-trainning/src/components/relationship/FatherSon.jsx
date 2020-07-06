import React, { cloneElement } from 'react'

export default props => { 
    const childs = props.children.map(child => { 
        return cloneElement(child, { ...props }) 
    })
    return childs
}