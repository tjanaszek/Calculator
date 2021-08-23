/**
 * @jest-environment jsdom
 */

 const { test, expect } = require('@jest/globals')


 const {Calculator} = require('../www/calculator')
 
 test('Append period to the current operand with period', ()=>{
     const calculator = new Calculator()
     calculator.currentOperand='34.5'
     calculator.appendNumber('.')
     expect(calculator.currentOperand).toEqual('34.5')
 })
 