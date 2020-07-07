import React, { Component } from 'react'
import './Counter.css'

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
                <span> How much </span><input onChange={ this.step } />
                <div className="buttons">
                    <button className="btn-inc" onClick={ this.inc }> + </button>
                    <button className="btn-dec" onClick={ this.dec }> - </button>
                </div>
            </div> 
        )
    }
}

export default Counter
