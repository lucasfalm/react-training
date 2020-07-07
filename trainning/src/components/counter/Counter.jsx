import React, { Component } from 'react'
import './Counter.css'
import Display from './Display'
import Input from './Input'
import Buttons from './Buttons'

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

    step = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return ( 
            <div>
                <Display count={ this.state.count } />
                <Input count={ this.state.step } step={ this.step }/>
                <Buttons inc={ this.inc } dec={ this.dec } />
            </div> 
        )
    }
}

export default Counter
