import React from 'react'

export default props => {
    const data = props.click
    const giveName = () => { "Lucas" }
    const giveLastName = () => "Feijo"
    return (
    <div>
        <div>
            <button onClick = { _ => data(giveName(), giveLastName()) }>
                See my name
            </button>
        </div>
        <div>
            <button onClick = { _ => data("?", "?") }>
                Clear
            </button>
        </div>
    </div>
    )
}