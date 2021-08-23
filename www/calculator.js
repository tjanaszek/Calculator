/* CALCULATOR*/

class Calculator {
    constructor(previousOperandScreen, currentOperandScreen) {
        this.previousOperandScreen = previousOperandScreen
        this.currentOperandScreen = currentOperandScreen
        this.clear()
    }

    clear() {
        this.currentOperand = '0'
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
        if (this.currentOperand.length < 1) {
            this.currentOperand = '0';
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        if (this.currentOperand === '0') {
            this.currentOperand = '' 
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '÷':
                if (current !== 0) {
                    computation = prev / current
                } else {
                    this.currentOperandScreen.innerText = "Cholero, nie dziel przez zero"
                    this.previousOperandScreen.innerText = ''
                    throw Error("Cholero, nie dziel przez zero")
                }
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    // UPDATE SCREEN - OPCJA KRÓTSZA

    updateScreen() {
        this.currentOperandScreen.innerText = this.currentOperand
        if (this.operation != null) {
            this.previousOperandScreen.innerText = `${this.previousOperand} ${this.operation}`
        }  else {
            this.previousOperandScreen.innerText = ''
        }
    }

    // UPDATE SCREEN - OPCJA DŁUŻSZA Z FORMATOWANIEM DŁUŻSZYCH NUMERÓW (przecinek po 3 cyfrach)

    // getDisplayNumber(number) {
    //     const stringNumber = number.toString()
    //     const integerDigits = parseFloat(stringNumber.split('.')[0])
    //     const decimalDigits = stringNumber.split('.')[1]
    //     let integerDisplay

    //     if (isNaN(integerDigits)) {
    //         integerDisplay = ''
    //     } else {
    //         integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0 })
    //     }

    //     if (decimalDigits != null) {
    //         return `${integerDisplay}.${decimalDigits}`
    //     } else {
    //         return integerDisplay
    //     }
    // }

    // updateScreen() {
    //     this.currentOperandScreen.innerText = this.getDisplayNumber(this.currentOperand)
    //     if (this.operation != null) {
    //         this.previousOperandScreen.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    //     } else {
    //         this.previousOperandScreen.innerText = ''
    //     }
    // }
}

/* JSDOM */

document.addEventListener('DOMContentLoaded', function () {
    const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const previousOperandScreen = document.querySelector('.previous-operand')
const currentOperandScreen = document.querySelector('.current-operand')

const calculator = new Calculator(previousOperandScreen, currentOperandScreen)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateScreen()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateScreen()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateScreen()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateScreen()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateScreen()
})

});

module.exports.Calculator = Calculator;