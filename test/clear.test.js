
const {Calculator} = require('../www/calculator')

test('Clears calculator screen, setting "currentOperan" to 0', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand='345'
    calculator.previousOperand = '666+'
    calculator.clear()

    expect(calculator.currentOperand).toEqual('0')
    expect(calculator.previousOperand).toEqual('')
    
})
