const root = document.documentElement
const radios = document.forms['radio-form'].elements['switch-one']
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const operandsText = document.querySelector('[data-operands]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const equalsButton = document.querySelector('[data-equals]')

numberButton.forEach(button => {
  button.addEventListener('click',() => {

    (button.innerText === '.') ?
      (operandsText.innerText.includes(button.innerText))
        ? null : updateText(button.innerText)
     : updateText(button.innerText)

  })
})
operationButton.forEach(button => {
  button.addEventListener('click',() => {

    ((/[\+\-x\/]/).test(operandsText.innerText)) ?  null
      : updateText(button.innerText)
  })
})
resetButton.addEventListener('click',() => {
  updateText('')
})
deleteButton.addEventListener('click',() => {
  deleteText(operandsText.innerText)
})
equalsButton.addEventListener('click',() => {
  computeResult(operandsText.innerText)
})


for(let i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {
    const chosenValue = parseInt(this.value)
    if( chosenValue === 1 ) {
      setTheme1();
    }
    else if( chosenValue === 2 ) {
      setTheme2()
    }
    else {
      setTheme3()
    }
  }
}

function updateText(newText) {
  if(!newText) {
    operandsText.innerText = newText
  } else {
      operandsText.innerText += newText
  }

}
function deleteText(displayText) {

  operandsText.innerText = displayText
                            .split('')
                            .splice(0,displayText.length-1)
                            .join('')
}
function textEmpty(displayText) {
  return !displayText ? true : false

}
function getComputation(operator,op1,op2) {
  switch(operator) {
    case '+': return (op1+op2).toString()
              break;
    case '-': return (op1-op2).toString()
              break;
    case 'x': return (op1*op2).toString()
              break;
    case '/': return (op1/op2).toString()
              break;

  }
}
function computeResult(displayText) {
  if(textEmpty(displayText)) {
     return
  }

  const operation = displayText.match(/[\+\-\/x]/)
  if(textEmpty(operation)) {
     return
  }
  const firstOperand = parseFloat(displayText.split(operation[0])[0])
  const secondOperand = parseFloat(displayText.split(operation[0])[1])

  if(textEmpty(firstOperand) || textEmpty(secondOperand)) {
    return
  } else {

    displayText = getComputation(operation[0],firstOperand,secondOperand)
    operandsText.innerText = displayText
  }
}

function setTheme1() {
  root.style.setProperty('--main-background', 'hsl(222, 26%,31%)');
  root.style.setProperty('--toggle-keypad-background', 'hsl(223, 31%, 20%)');
  root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
  root.style.setProperty('--reset-del-key-background', 'hsl(225, 21%, 49%)');
  root.style.setProperty('--reset-del-key-shadow', 'hsl(224, 28%, 35%)');
  root.style.setProperty('--equalto-key-background-toggle', 'hsl(6, 63%, 50%)');
  root.style.setProperty('--equalto-key-shadow', 'hsl(6, 70%, 34%)');
  root.style.setProperty('--op-key-background', 'hsl(30, 25%, 89%)');
  root.style.setProperty('--op-key-shadow','hsl(28, 16%, 65%)');
  root.style.setProperty('--op-text','hsl(221, 14%, 31%)');
  root.style.setProperty('--reset-del-text','hsl(0, 0%, 100%)');
  root.style.setProperty('--equalto-text','hsl(0, 0%, 100%)');
  root.style.setProperty('--heading-text','hsl(0, 0%, 100%)');
}
function setTheme2() {
  root.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
  root.style.setProperty('--toggle-keypad-background', 'hsl(0, 5%, 81%)');
  root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
  root.style.setProperty('--reset-del-key-background', 'hsl(185, 42%, 37%)');
  root.style.setProperty('--reset-del-key-shadow', 'hsl(185, 58%, 25%)');
  root.style.setProperty('--equalto-key-background-toggle', 'hsl(25, 98%, 40%)');
  root.style.setProperty('--equalto-key-shadow', 'hsl(25, 99%, 27%)');
  root.style.setProperty('--op-key-background', 'hsl(45, 7%, 89%)');
  root.style.setProperty('--op-key-shadow','hsl(35, 11%, 61%)');
  root.style.setProperty('--op-text','hsl(60, 10%, 19%)');
  root.style.setProperty('--reset-del-text','hsl(0, 0%, 100%)');
  root.style.setProperty('--equalto-text','hsl(0, 0%, 100%)');
  root.style.setProperty('--heading-text','hsl(60, 10%, 19%)');
}
function setTheme3() {
  root.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
  root.style.setProperty('--toggle-keypad-background', 'hsl(268, 71%, 12%)');
  root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
  root.style.setProperty('--reset-del-key-background', 'hsl(281, 89%, 26%)');
  root.style.setProperty('--reset-del-key-shadow', 'hsl(285, 91%, 52%)');
  root.style.setProperty('--equalto-key-background-toggle', 'hsl(176, 100%, 44%)');
  root.style.setProperty('--equalto-key-shadow', 'hsl(290, 70%, 36%)');
  root.style.setProperty('--op-key-background', 'hsl(268, 47%, 21%)');
  root.style.setProperty('--op-key-shadow','hsl(290, 70%, 36%)');
  root.style.setProperty('--op-text','hsl(52, 100%, 62%)');
  root.style.setProperty('--reset-del-text','hsl(0, 0%, 100%)');
  root.style.setProperty('--equalto-text','hsl(198, 20%, 13%)');
  root.style.setProperty('--heading-text','hsl(52, 100%, 62%)');
}
