
const {Calculator} = require('../www/calculator')

test('After clicking a sequence of buttons expect result to be', ()=>{

  document.body.innerHTML = 
  '<div class="calculator-screen" >'+
    '<div class="previous-operand"></div>'+
    '<div class="current-operand"></div>'+
  '</div>'+
  '<button class="number"></button>'+
  '<button class="operator"></button>'+
  '<button class="equals"></button> '

  const previousOperandScreen = document.querySelector('.previous-operand')
  const currentOperandScreen = document.querySelector('.current-operand')
  const numberButtons = document.querySelector('.number')
  const operationButtons = document.querySelector('.operator')
  const equalsButton = document.querySelector('.equals')

  const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

  calculator.currentOperandScreen.innerText ='0'
  calculator.previousOperandScreen.innerText = ''
 
  numberButtons.addEventListener('click', () => {
      calculator.appendNumber(numberButtons.innerText)
      calculator.updateScreen()
  })

  operationButtons.addEventListener('click', () => {
      calculator.chooseOperation(operationButtons.innerText)
      calculator.updateScreen()
  })

  equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateScreen()
  })

  numberButtons.innerText = '9'
  numberButtons.click()

  numberButtons.innerText = '0'
  numberButtons.click()

  operationButtons.innerText = '+'
  operationButtons.click()

  numberButtons.innerText = '2'
  numberButtons.click()

  operationButtons.innerText = '-'
  operationButtons.click()

  numberButtons.innerText = '40'
  numberButtons.click()

  equalsButton.click()

  expect(calculator.currentOperandScreen.innerText).toEqual(52)
    
})
