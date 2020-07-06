import React from 'react'
import './Card.css'

export default (props) => { 
    const cardStyle = { 
        backgroundColor: props.color || "blue",
        borderColor: props.color || "blue",
    }

    return (
    <>
        <div className="Card" style={ cardStyle }>
            <div className="Title"> { props.title } </div>
            <div className="Content"> { props.children } </div> 
        </div>
    </>
    )
}
// props.children are all the childrens inside this component