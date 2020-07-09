import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

import './Calculator.css'

class Calculator extends Component {
    state = {
        total: '',
        equation: '',
        flag: false,
        leftHand: '',
        rightHand: ''
    }

    sub = () => {        
        if(this.state.flag) {
            let total =+ makeCalc(this.state.leftHand, this.state.rightHand, this.state.equation)
            this.prepareOperation(false, total, '-')
        } else {
            this.prepareOperation(true, this.state.total, '-')
        }
    }

    add = () => {        
        if(this.state.flag) {
            let total =+ makeCalc(this.state.leftHand, this.state.rightHand, this.state.equation)
            this.prepareOperation(false, total, '+')
        } else {
            this.prepareOperation(true, this.state.total, '+')
        }
    }

    mult = () => {        
        if(this.state.flag) {
            let total =+ makeCalc(this.state.leftHand, this.state.rightHand, this.state.equation)
            this.prepareOperation(false, total, '*')
        } else {
            this.prepareOperation(true, this.state.total, '*')
        }
    }

    div = () => {        
        if(this.state.flag) {
            let total =+ makeCalc(this.state.leftHand, this.state.rightHand, this.state.equation)
            this.prepareOperation(false, total, '/')
        } else {
            this.prepareOperation(true, this.state.total, '/')
        }
    }

    prepareOperation = (status, total, equationType) => { 
        this.setState({
            total: total,
            flag: status,
            equation: equationType,
        })
    }


    calculate = (value) => {     
        if(this.state.flag) { 
            let actual = this.state.rightHand
            this.setState({ rightHand: actual + value })
        } else {
            let actual = this.state.leftHand
            this.setState({ leftHand: actual + value })
        }
    }

    total = () => { 
        let total = makeCalc(this.state.leftHand, this.state.rightHand, this.state.equation)
        console.log(total)
        return (
            this.setState({ 
                total:  total,
                leftHand: total,
                rightHand: '',
                equation: ''
            })
        )
    }

    clear = () => { this.setState({ total: 0, equation: '', flag: false, leftHand: '', rightHand: ''})}

    render() { 
        return(
            <div className="calculator">
               <Display total= { this.state.total } leftHand={ this.state.leftHand } equation={ this.state.equation }  rightHand={ this.state.rightHand }/>
               <Button label="1" click={ this.calculate } />
               <Button label="2" click={ this.calculate } />
               <Button label="3" click={ this.calculate } />
               <Button label="AC" click={ this.clear }  />
               <Button label="4" click={ this.calculate } />
               <Button label="5" click={ this.calculate } />
               <Button label="6" click={ this.calculate } />
               <Button label="/" click={ this.div } />
               <Button label="7" click={ this.calculate } />
               <Button label="8" click={ this.calculate } />
               <Button label="9" click={ this.calculate } />
               <Button label="*" click={ this.mult } />
               <Button label="0" click={ this.calculate } />
               <Button label="-" click={ this.sub } />
               <Button label="+" click={ this.add } />
               <Button label="=" click={ this.total } />
               <Button label="." click={ this.calculate } />
            </div>
        )
    }     
}
export default Calculator

function makeCalc(left, right, expression) { 
    let result = 0
    let avaliableExpressions = ['-', '+', '*', '/']
    for(var i=0; i<= avaliableExpressions.length; i++) { 
        if(expression === avaliableExpressions[i]) { 
            switch(i) {
                case 0:
                    result = parseInt(left) - parseInt(right)
                    break
                case 1:
                    result =  parseInt(left) + parseInt(right)
                    break
                case 2:
                    result =  parseInt(left) * parseInt(right)
                    break  
                case 3:
                    result =  parseInt(left) / parseInt(right)
                    break
            }
        }
    }
    return result
}