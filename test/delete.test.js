
const {Calculator} = require('../www/calculator')

test('Delete last value', ()=>{

    const calculator = new Calculator()
    
    calculator.currentOperand ='345'
    calculator.delete()

    expect(calculator.currentOperand).toEqual('34')
    
})
