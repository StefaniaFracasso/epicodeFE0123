var elemento1 = 0
var elemento2 = 0
var operatore

function inputNumber (digit) {
  document.getElementById('inputField').value += digit
}

function memorizzaOperazione (operator) {
  elemento1 = document.getElementById('inputField').value
  document.getElementById('inputField').value = ''
  operatore = operator
}

function memorizzaElemento2 () {
  elemento2 = document.getElementById('inputField').value
  document.getElementById('inputField').value = ''
  calcola()
}

function sqrt () {
  elemento1 = document.getElementById('inputField').value
  elemento1 = Number(elemento1)
  document.getElementById('inputField').value = Math.sqrt(elemento1)
}

function pow () {
    elemento1 = document.getElementById('inputField').value
    elemento1 = Number(elemento1)
    document.getElementById('inputField').value = Math.pow(elemento1,2)
  }

function calcola () {
  elemento1 = Number(elemento1)
  elemento2 = Number(elemento2)

  switch (operatore) {
    case '+':
      risultato = elemento1 + elemento2
      break
    case '-':
      risultato = elemento1 - elemento2
      break
    case '*':
      risultato = elemento1 * elemento2
      break
    case '/':
      risultato = elemento1 / elemento2
      break
    default:
      risultato = 0
      break
  }

  document.getElementById('inputField').value = risultato
  elemento1 = 0
  elemento2 = 0
}

function cancellaField (canc) {
  document.getElementById('inputField').value = ''
  elemento1 = 0
  elemento2 = 0
}
