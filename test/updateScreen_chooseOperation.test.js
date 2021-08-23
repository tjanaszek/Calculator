
const {Calculator} = require('../www/calculator')

test('Update the screen after choosing an operation ', ()=>{

  document.body.innerHTML = 
  '<div class="calculator-screen" >'+
    '<div class="previous-operand"></div>'+
    '<div class="current-operand"></div>'+
  '</div>'

  const previousOperandScreen = document.querySelector('.previous-operand')
  const currentOperandScreen = document.querySelector('.current-operand')

  const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

  calculator.currentOperand ='25'
  // calculator.operation =''
  calculator.chooseOperation('+')
  calculator.updateScreen()
  
  // calculator.previousOperandScreen.innerText = ""

  expect(calculator.previousOperandScreen.innerText).toBe('25 +')

})
