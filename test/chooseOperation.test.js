
const {Calculator} = require('../www/calculator')

test('Changes the value of "operation" to "+" and "previousOperand" to the value of "currentOperand" ', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand='10'
    calculator.previousOperand = ''
    calculator.chooseOperation('+') 
    
    expect(calculator.previousOperand).toBe('10')
    expect(calculator.operation).toBe('+')
    
})
