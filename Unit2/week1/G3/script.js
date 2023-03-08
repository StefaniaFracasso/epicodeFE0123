console.log('dom manipulation')

//selezioniamo l'immagine della card di mezzo
let allProdCards = document.getElementsByClassName('card') //potevamo usare anche document.querySelectorAll(.card) --> torna una nodelist, getElementByClassName torna un HTMLCollection. entrambi agiscono come array
console.log (allProdCards)

let card2 = allProdCards[1]
console.log (card2)

//come cambio l'immagine alla card?
// innanzitutto seleziono l'immagine dentro la card

let imageToChange = card2.getElementsByTagName('img')[0] //anche questo torna un'array
console.log(imageToChange)

imageToChange.setAttribute('src', 'https://placekitten.com/200') //ci permette di cambiare un attributo, in questo caso nell'immagine noi vogliamo cambiare la src

// cambiamo il testo del paragrafo

let ContentToChange = document.getElementsByClassName('article-content')[0]

let article = ContentToChange.getElementsByTagName('p')[0]
console.log(article)


article.innerText = 'ciao'  
// la differenza tra innerHTML e innerText è che innerText accetta contenuti testuali, in innerHTML possiamo proprio scrivere dei tag HTML con il loro contenuto. 
// Se scriviamo direttamtente il contenuto testuale funziona lo stesso. 


//aggiungiamo un nuovo elemento del menù
// 1. creo il li

let newMenuElement = document.createElement('li')
newMenuElement.innerText = 'Map' //definito il testo
// newMenuElement.classList.add('navbar') //assegnata una classe

// 2. il li è solo in memoria, dobbiamo aggiungerlo alla pagina
//seleziono il tag ul
let navbar = document.getElementsByTagName('ul')[0]
console.log(navbar)

navbar.appendChild(newMenuElement)

