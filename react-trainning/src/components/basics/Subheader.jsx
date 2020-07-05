import React from 'react'

export default function Subheader(props) {
    return(
        <React.Fragment>
            <h2> Hello, { props.name }. { props.date } </h2>
        </React.Fragment>
    )
}