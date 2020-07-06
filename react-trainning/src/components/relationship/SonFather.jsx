import React, { useState } from 'react'
import Son from './SonState'
import If, { Else } from '../basics/If'

export default _ => { 
    const [name, setName] = useState("?")
    const [lastname, setLastName] = useState("?")
    
    function giveInfos(name, lastname) { 
        setName(name)
        setLastName(lastname)
    }
    
    return(
        <div>
            <div>
                <If content={ name != "?"} >
                    <span> { name } </span>
                    <strong> { lastname } </strong>
                    <Else>
                        <span> What is my name? </span>
                        <span> What is my lastname? </span>
                    </Else>
                </If>

            </div>
            <Son click={ giveInfos } /> 
        </div>
    )
}