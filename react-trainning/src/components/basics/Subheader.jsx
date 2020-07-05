import React from 'react'

export default function Subheader(props) {
    return(
        <div>
            <h2> Hello, { props.name }. { props.date } </h2>
        </div>
    )
}