import React, { Component } from 'react'

class Counter extends Component { 

    state = {
        count: this.props.initValue || 0,
        step: this.props.step || 5
    }


    inc = () => { 
        this.setState({
            count: this.state.count + this.state.step,
        })
    }

    dec = () => { 
        this.setState({
            count: this.state.count - this.state.step,
        })
    }

    step = (e) => {
        this.setState({
            step: parseInt(e.target.value)
        })
    }

    render() {
        return ( 
            <div>
                <h2> { this.state.count }</h2>
                <span>How much </span><input onChange={ this.step } />
                <div>
                    <button onClick={ this.inc }> + </button>
                    <button onClick={ this.dec }> - </button>
                </div>
            </div> 
        )
    }
}

export default Counter
