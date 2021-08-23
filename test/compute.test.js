/**
 * @jest-environment jsdom
 */

 const { test, expect } = require('@jest/globals')


 const {Calculator} = require('../www/calculator')
 
 test('Compute - addition', ()=>{
     const calculator = new Calculator()
     calculator.currentOperand='35'
     calculator.previousOperand='3.5'
     calculator.operation='+'
     calculator.compute()
     expect(calculator.currentOperand).toEqual(38.5)
 })
 