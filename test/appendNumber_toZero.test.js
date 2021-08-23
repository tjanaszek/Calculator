
const {Calculator} = require('../www/calculator')

test('Append number to the current operand=0', ()=>{

    const calculator = new Calculator()

    calculator.currentOperand ='0'
    calculator.appendNumber(5)

    expect(calculator.currentOperand).toEqual('5')
})
 