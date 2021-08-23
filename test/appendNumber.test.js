/**
 * @jest-environment jsdom
 */

 const { test, expect } = require('@jest/globals')


 const {Calculator} = require('../www/calculator')
 
 test('Append number to the current operand', ()=>{
     const calculator = new Calculator()
     calculator.currentOperand='34'
     calculator.appendNumber(5)
     expect(calculator.currentOperand).toEqual('345')
     
 })
 