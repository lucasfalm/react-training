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

    rangeRandomUniqNumbers = () => { 
        var numbers = []
        
        for(var i = 0; i < this.state.range; i++) {
            var random = Math.floor((Math.random() * 99) + 1)

            if(!numbers.includes(random) && random !== 0) {
                numbers.push(random)       
            }
        }
    
        this.setState({
            sortedNumbers: numbers
        })      
    }

    render() {
        return(
            <div className="millions">
                <Display numbers={ this.state.sortedNumbers } />
                <Input actualRange={ this.state.range } setRange={ this.setRange } />
                <Button rangeNumbers={ this.rangeRandomUniqNumbers } />
            </div>
        )
    }
}
export default Millions