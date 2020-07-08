import React, { Component } from 'react'
import Input from './Input'
import Display from './Display'
import Button from './Button'
import './Millions.css'

class Millions extends Component { 
    state = {
        range: this.props.range || 0,
        sortedNumbers: []
    }

    setRange = (newRange) => { 
        this.setState({
            range: newRange 
        })
    }

    rangeNumbers = () => { 
        var numbers = []
        for(var i = 0; i < this.state.range; i++) {
            numbers.push(Math.floor((Math.random() * 99) + 1))       
        }
    
        this.setState({
            sortedNumbers: numbers
        })      
    }

    render() {
        return(
            <div className="millions">
                <Display numbers={ this.state.sortedNumbers } actualRange={ this.state.range }/>
                <Input range={ this.state.range } setRange={ this.setRange } />
                <Button rangeNumbers={ this.rangeNumbers } />
            </div>
        )
    }
}
export default Millions