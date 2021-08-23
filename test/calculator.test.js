/**
 * @jest-environment jsdom
 */

const { test, expect } = require('@jest/globals')


const {Calculator} = require('../www/calculator')

test('Clearing display and values', ()=>{
    document.body.innerHTML = 
    '<div class="calculator-screen" >'+
      '<div class="previous-operand">5+</div>'+
      '<div class="current-operand">3</div>'+
    '</div>'+
    '<button class="clear span-two" value="clear">AC</button>'

    const previousOperandScreen = document.querySelector('.previous-operand')
    const currentOperandScreen = document.querySelector('.current-operand')

    const calculator = new Calculator(previousOperandScreen, currentOperandScreen)


    expect(calculator.currentOperand).toEqual('0')
    expect(calculator.previousOperand).toEqual('')
    expect(calculator.operation).toEqual(undefined)

})
