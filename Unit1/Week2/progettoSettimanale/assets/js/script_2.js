var elemento = 0
var operatore;
var clearScreen = false;

function inputNumber (digit) {
  if (clearScreen) {
    document.getElementById('inputField').value = '';
    clearScreen = false;  
  }
  document.getElementById('inputField').value += digit
}

function backspace () {
    elemento = document.getElementById('inputField').value
    document.getElementById('inputField').value = elemento.slice(0, -1) //elemento.substr(0, elemento.length - 1, 1);
}

function sqrt () {
  elemento = Number(document.getElementById('inputField').value)
  document.getElementById('inputField').value = Math.sqrt(elemento)
}

function pow () {
  elemento = Number(document.getElementById('inputField').value)
  document.getElementById('inputField').value = (elemento ** 2) //Math.pow(elemento, 2)
}

function memorizzaOperazione (operator) {
  elemento = document.getElementById('inputField').value
  operatore = operator;
  clearScreen = true;
}

function calcola () {
  elemento = Number(elemento);
  elemento2 = Number(document.getElementById('inputField').value);
  clearScreen = true;
  let risultato;
  switch (operatore) {
    case '+':
      risultato = elemento + elemento2
      break
    case '-':
      risultato = elemento - elemento2
      break
    case '*':
      risultato = elemento * elemento2
      break
    case '/':
      risultato = elemento / elemento2
      break
    default:
      risultato = 0
      break
  }

  document.getElementById('inputField').value = risultato
  elemento = 0
}

function cancellaField (canc) {
  document.getElementById('inputField').value = '';
  elemento = 0;
  operatore = "";
}
