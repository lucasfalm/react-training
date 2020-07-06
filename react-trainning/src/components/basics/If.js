export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else' // if type is Else
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild // childs unlike Else types
    })

    if( props.content ) {
        return ifChildren // if there is content, return, unless Else childs
    } else if(elseChild) { // elsif there is any Else type 
        return elseChild // return them
    } else { // anyhow, return nothing
        return false
    }
}

export const Else = props =>  props.children  