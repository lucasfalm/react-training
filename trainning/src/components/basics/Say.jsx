import React from 'react'
import If, { Else } from './If'

export default props => { 
    const say = props.something || {}

    return (
        <div>
            <If content={ say.what }>
                <h3> The lord say:</h3>
                <span><strong> { say.what } </strong></span> 
                <Else>
                    <span> I don't like you. Nothing to say.</span>
                </Else>
            </If>
        </div>
    )
}