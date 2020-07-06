import React, { cloneElement } from 'react'

export default props => { 
    return (
        <div>
            { props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i }); // key just for avoid uniq key error
            })}
        </div>
    )
}