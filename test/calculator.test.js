
const {Calculator} = require('../www/calculator')

test('Creating a new calculator within a class of {Calculator} ', ()=>{

  const previousOperandScreen = document.querySelector('.previous-operand')
  const currentOperandScreen = document.querySelector('.current-operand')

  const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

  expect(calculator.currentOperand).toEqual('0')
  expect(calculator.previousOperand).toEqual('')
  expect(calculator.operation).toEqual(undefined)

})
