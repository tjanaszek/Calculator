
const {Calculator} = require('../www/calculator')

test('Clears calculator screen, setting "currentOperan" to 0', ()=>{

    document.body.innerHTML = 
    '<div class="calculator-screen" >'+
      '<div class="previous-operand"></div>'+
      '<div class="current-operand"></div>'+
    '</div>'+
    '<button class="clear span-two" value="clear">AC</button>' 

    const clearButton = document.querySelector('.clear')
    const previousOperandScreen = document.querySelector('.previous-operand')
    const currentOperandScreen = document.querySelector('.current-operand')

    const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

    calculator.currentOperandScreen.innerText ='345'
    calculator.previousOperandScreen.innerText = '666+'

    clearButton.addEventListener('click', () => {
        calculator.clear()
        calculator.updateScreen()
    })

    clearButton.click()

    expect(calculator.currentOperandScreen.innerText).toEqual('0')
    expect(calculator.previousOperandScreen.innerText).toEqual('')
    
})
