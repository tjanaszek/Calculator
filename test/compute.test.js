
const {Calculator} = require('../www/calculator')

test('Compute - addition', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='35'
    calculator.previousOperand ='3.5'
    calculator.operation ='+'
    calculator.compute()

    expect(calculator.currentOperand).toEqual(38.5)
})

test('Compute - subtraction', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='4'
    calculator.previousOperand ='44'
    calculator.operation ='-'
    calculator.compute()

    expect(calculator.currentOperand).toEqual(40)
})

test('Compute - multiplication', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='3'
    calculator.previousOperand ='33'
    calculator.operation ='x'
    calculator.compute()

    expect(calculator.currentOperand).toEqual(99)
})

test('Compute - division', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='2'
    calculator.previousOperand ='75'
    calculator.operation ='÷'
    calculator.compute()

    expect(calculator.currentOperand).toEqual(37.5)
})

test('Compute - negative numbers', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='-2'
    calculator.previousOperand ='2'
    calculator.operation ='x'
    calculator.compute()
    
    expect(calculator.currentOperand).toEqual(-4)
})
 