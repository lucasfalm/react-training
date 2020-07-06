import React from 'react'
import './Card.css'

export default (props) => { 
    const style = { 
        backgroundColor: props.color
    }
    return (
    <>
        <div className="Card">
            <div className="Title" style={ style }> { props.title } </div>
            <div className="Content"> { props.children } </div> 
        </div>
    </>
    )
}
// props.children are all the childrens inside this component