/* ESERCIZIO 1
Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

var stringa1 = "ciao";
var stringa2 = "a tutti";
var nuovaStringa = "";

function concatenaStringa (stringa1, stringa2) {
    var parte1 = stringa1.substr(0, 2);
    var parte2 = stringa2.substr(-3);
    var nuovaStringa = parte1 + parte2;
    return nuovaStringa;
}
console.log(concatenaStringa(stringa1, stringa2).toUpperCase());

/* ESERCIZIO 2
Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
*/
var oddArray = [];
let i = 1;
while (i < 100) {
    oddArray.push(i)
    i = i + 2;
}
console.log(oddArray);

/* ESERCIZIO 3
Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
*/
var array5 = [];
let j = 1;
while (j <= 100) {
    if (j%5 === 0) {
        array5.push(j)
    }
    j++;
}
console.log(array5);

/* ESERCIZIO 4
Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

var array10 = [];
function aggiungi10() {
    for (let i = 0; i < 10; i++) {
    array10.push(Math.floor(Math.random()* 101));
    } return array10;
}
console.log(aggiungi10());

/* ESERCIZIO 5
Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
*/
var numeri = [2,5,8,9,3,1,13,14,16];
var soloPari = [];
function dammiPari() {
    for (i = 0; i < numeri.length; i++) {
        if (i%2 === 0) {
            soloPari.push(i);
        }
    } return soloPari;
}

console.log(dammiPari());

/* ESERCIZIO 6
Scrivi una funzione per sommare a catena i numeri contenuti in un array.
*/

var arr = [];
const numeroElementi = 3;
const max = 10;

for(let i = 0; i<numeroElementi; i++){
    arr.push(Math.floor(Math.random() *max))
}
console.log(arr)

function sommaArray (arr) {
    var somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }return somma;
}
somma = sommaArray (arr)
console.log(somma)

/* ESERCIZIO 7
Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

/* ESERCIZIO 8
Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* ESERCIZIO 9 (EXTRA)
Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

/* ESERCIZIO 10 (EXTRA)
Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
*/

/* ESERCIZIO 11 (EXTRA)
Scrivi un algoritmo in grado di invertire un array.
es: [1, 3, 5] ==> [5, 3, 1]
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */

/* ESERCIZIO 12
Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]

var bottone = document.getElementById('myBtn');
var risultatoFinale = document.getElementById('filmTrovato');

window.addEventListener('load', function() {for (let i = 0; i < movies.length; i++) {
    document.getElementById('select').innerHTML += `<option value="${movies[i].imdbID}">${movies[i].Title}</option>`;
}});

function trovaFilm () {
    var idSelezionato = document.getElementById('select').value;
    for (i=0; i< movies.length; i++) {
        if (idSelezionato == movies[i].imdbID) {
            return movies[i]
        }
    }
} 

bottone.addEventListener ('click', function (){
    var filmTrovato = trovaFilm ()
    if (filmTrovato != undefined){
     risultatoFinale.innerHTML = `<h2>Il film scelto è </h2><h3>${filmTrovato.Title}</h3><h3>L'anno di uscita è il ${filmTrovato.Year}</h3><img src="${filmTrovato.Poster}">`;
    }
    else {
     risultatoFinale.innerHTML = "Il film selezionato non esiste"
    }

})

/* ESERCIZIO 17
Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

var searchBar = document.getElementById('text')
var searchButton = document.getElementById('cerca')

searchButton.addEventListener ('click' , function (){
    inputMovie ();
})

function inputMovie () {
    var userInput = searchBar.value.toLowerCase();
    var risultatiRicerca = document.getElementById('risultatiRicerca')
    var found = false; //prima di iniziare a controllare i film nel ciclo for, imposto una variabile su false perchè non ho ancora trovato nulla. la variabile resta su false finchè non trovo una corrispondente che la faccia diventare vera
    risultatiRicerca.innerHTML = '';

    for (i = 0; i < movies.length; i++) {
        var movieTitle = movies[i].Title.toLowerCase();
        if (movieTitle.indexOf(userInput) >=0 ) {
            risultatiRicerca.innerHTML += `<h2>I film disponibili sono:</h2><h3>${movies[i].Title}</h3><h3>L'anno di uscita è il ${movies[i].Year}</h3><img src="${movies[i].Poster}">`;
            found = true // dal momento che il ciclo ha trovato almeno una corrispondenza, posso dichiarare che la variabile è vera
        }
    }
    if (found === false) { // dopo aver cercato in tutti gli oggetti degli array e verificato che found sia stato sempre falso e che quindi non abbia mai trovato nulla, scriviamo che il film ricercato non è disponibile
        risultatiRicerca.innerHTML = "Il film ricercato non è disponibile"
    }
}