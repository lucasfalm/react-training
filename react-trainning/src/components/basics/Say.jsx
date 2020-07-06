import React from 'react'
import If, { Else } from './If'

export default props => { 
    const what = props.what || []

    return (
        <div>
            <If say={ what }>
                <h3> The lord say:</h3>
                <span><strong> { what } </strong></span> 
                <Else>
                    <span> I don't like you. Nothing to say.</span>
                </Else>
            </If>
        </div>
    )
}