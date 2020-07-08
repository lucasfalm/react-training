import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

import './Calculator.css'

class Calculator extends Component {
    state = {
        total: 0,
        equation: ''
    }

    calculate = (value) => {
        let actualEquation = this.state.equation
        actualEquation += value
        this.setState({
            equation: actualEquation,
        })
    }

    render() { 
        return(
            <div className="calculator">
               <Display value={ this.state.equation } />
               <Button label="/" click={ this.calculate } />
               <Button label="AC" click={ this.calculate }  />
               <Button label="7" click={ this.calculate } />
               <Button label="8" click={ this.calculate } />
               <Button label="9" click={ this.calculate } />
               <Button label="*" click={ this.calculate } />
               <Button label="4" click={ this.calculate } />
               <Button label="5" click={ this.calculate } />
               <Button label="6" click={ this.calculate } />
               <Button label="-" click={ this.calculate } />
               <Button label="2" click={ this.calculate } />
               <Button label="3" click={ this.calculate } />
               <Button label="+" click={ this.calculate } />
               <Button label="0" click={ this.calculate } />
               <Button label="." click={ this.calculate } />
               <Button label="=" click={ this.calculate } />
            </div>
        )
    }     
}
export default Calculator