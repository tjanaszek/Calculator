 const {Calculator} = require('../www/calculator')

test('Compute - does not divide by 0', ()=>{
    document.body.innerHTML = 
    '<div class="calculator-screen" >'+
      '<div class="previous-operand"></div>'+
      '<div class="current-operand">0</div>'+
    '</div>'+
    '<button class="number" value="1">1</button>'

    const previousOperandScreen = document.querySelector('.previous-operand')
    const currentOperandScreen = document.querySelector('.current-operand')
    const numberButton = document.querySelector('.number')

    const calculator = new Calculator(previousOperandScreen, currentOperandScreen)
    numberButton.innerText='1'
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText)
        calculator.updateScreen()
    })
    numberButton.click()

    expect(calculator.currentOperand).toEqual('1')
      
})