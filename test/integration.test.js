 const { test, expect } = require('@jest/globals')


 const {Calculator} = require('../www/calculator')

test('Click the butttons: 2, x, 3, +, 8, =', ()=>{
    document.body.innerHTML = 
    '<div class="calculator-screen" >'+
      '<div class="previous-operand"></div>'+
      '<div class="current-operand">0</div>'+
    '</div>'+
    '<button class="number" value="1">1</button>'+
    '<button class="operator" value="*">x</button>'+
    '<button class="equals span-two" value="=">=</button> '

    const previousOperandScreen = document.querySelector('.previous-operand')
    const currentOperandScreen = document.querySelector('.current-operand')
    const numberButton = document.querySelector('.number')
    const operatorButton = document.querySelector('.operator')
    const equalsButton = document.querySelector('.equals')

    const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

    numberButton.innerText='2'
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText)
        calculator.updateScreen()
    })

    operatorButton.innerText='x'
    operatorButton.addEventListener('click', () => {
        calculator.chooseOperation(operatorButton.innerText)
        calculator.updateScreen()
    })

    equalsButton.addEventListener('click', () => {
        calculator.compute()
        calculator.updateScreen()
    })

    numberButton.click()
    operatorButton.click()
    numberButton.innerText='3'
    numberButton.click()
    operatorButton.innerText='+'
    operatorButton.click()
    numberButton.innerText='8'
    numberButton.click()
    equalsButton.click()

    expect(calculator.currentOperand).toEqual(14)
      
})