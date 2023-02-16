/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */

const changeTitle = function (newTitle) {
  var newTitle = 'Titolo del documento'
  document.title = newTitle
}
changeTitle()

/* ESERCIZIO 2
       Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
      */

const addClassToTitle = function () { 
  var classe = document.querySelector('h1')
  classe.className = 'myHeading'
    // const title = document.querySelector('h1');
    // title.classList.add('myHeading');
}

addClassToTitle()

/* ESERCIZIO 3
       Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
      */

const changePcontent = function () {
  var paragrafi = document.querySelectorAll('div > p')
  for (i = 0; i < paragrafi.length; i++) {
    paragrafi[i].innerHTML = 'pollo alle mandorle'
  }
}
changePcontent()

/* ESERCIZIO 4
       Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
      */

const changeUrls = function () {
  var links = document.querySelectorAll('a')
  for (i = 0; i < links.length; i++) {
    links[i].href = 'https://www.google.it'
  }
}

changeUrls()

/* ESERCIZIO 5
       Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
      */

// secondo modo
const addToTheSecond = function (content) {
  var lista2 = document.getElementById('secondList');
  var newElement = document.createElement('li');
  newElement.textContent = content;
  lista2.appendChild(newElement);
}
addToTheSecond('Quarto')

// terzo modo
/*const addToTheSecond = function (content) {
    var lista2 = document.getElementById('secondList');
    var elementoLi = document.createElement('li');
    var contenutoLi = document.createTextNode('Quarto');
    elementoLi.appendChild(contenutoLi);
    lista2.appendChild(elementoLi);
}
addToTheSecond();*/

/* ESERCIZIO 6
       Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
      */

const addParagraph = function (content) {
    var primoDiv = document.querySelector('div');
    var nuovoParagrafo = document.createElement('p');
    nuovoParagrafo.textContent = content;
    primoDiv.appendChild(nuovoParagrafo);
}

addParagraph('Questo è il nuovo paragrafo.')

/* ESERCIZIO 7
       Scrivi una funzione per far scomparire la prima lista non-ordinata.
      */

const firstUlDisappear = function () {
    var primoUl = document.querySelector('ul');
    primoUl.innerHTML = '';
}

firstUlDisappear();

/* ESERCIZIO 8
       Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
      */

const paintItGreen = function () {
    var listeUl = document.querySelectorAll('ul');
    for (i = 0; i < listeUl.length; i++ ) {
        listeUl[i].style.backgroundColor = 'green';
    }
}

paintItGreen();

/* ESERCIZIO 9
       Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
      */

const makeItClickable = function () {
    var coloreH1 = document.querySelector("div > h1");
    
    coloreH1.addEventListener('click', function () {
        coloreH1.style.color = generaColoreRandom();
    })
}

function generaColoreRandom () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

makeItClickable();

/* ESERCIZIO 10
       Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
      */

const changeFooterText = function () {
    var footer = document.querySelector('.footer > h2');
    footer.addEventListener('click', function () {
        footer.innerHTML = 'Cambia il tuo testo con un click';
    })
}
changeFooterText();

/* ESERCIZIO 11
       Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
      */

const inputField = document.getElementById('input-field');
inputField.addEventListener('input', function (event) {
    console.log(event.target.value)});

/* ESERCIZIO 12
       Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
      */

/* window.onload = function () {
        alert('Benvenuto!')
      }*/
