import React, { Component } from 'react'

class Counter extends Component { 

    state = {
        count: this.props.initValue || 0
    }

    inc = () => { 
        this.setState({
            count: this.state.count + 1,
        })
    }

    dec = () => { 
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return ( 
            <div>
                <h2> { this.state.count }</h2>
                <div>
                    <button onClick={ this.inc }> + </button>
                    <button onClick={ this.dec }> - </button>
                </div>
            </div> 
        )
    }
}

export default Counter
