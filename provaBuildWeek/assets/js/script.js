const domande = [
  {
    domanda: 'Cosa vuol dire HTML?',
    risposte: [
      { text: 'Hyperlinks and Text Markup Language', correct: false },
      { text: 'Hyper Texts Markup Language', correct: true },
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Hyper Texts Modeling Language', correct: false }
    ]
  },
  {
    domanda: 'Chi crea gli standard del Web?',
    risposte: [
      { text: 'Mozilla', correct: false },
      { text: 'Il consorzio del World Wide Web', correct: true },
      { text: 'Microsoft', correct: false },
      { text: 'Google', correct: false }
    ]
  },
  {
    domanda:
      'Qual è il modo corretto per indicare il titolo più grande in HTML?',
    risposte: [
      { text: 'heading', correct: false },
      { text: 'title', correct: false },
      { text: 'h1', correct: true },
      { text: 'h6', correct: false }
    ]
  },
  {
    domanda: "Che cos'è un tag?",
    risposte: [
      { text: 'È un insieme di regole CSS', correct: false },
      {
        text: 'È un codice per automatizzare alcune procedure',
        correct: false
      },
      {
        text: 'È il protocollo di comunicazione utilizzato nel web',
        correct: false
      },
      { text: "È l'elemento fondamentale del linguaggio HTML", correct: true }
    ]
  },
  {
    domanda: 'Un attributo HTML',
    risposte: [
      {
        text: 'È quella parte di codice utilizzata per definire delle opzioni particolari in un tag',
        correct: true
      },
      {
        text: 'È utilizzato per indicare il punto di termine di un tag HTML',
        correct: false
      },
      {
        text: 'È il valore processato dal browser per comunicare il numero di tag in pagina',
        correct: false
      },
      {
        text: "È utilizzato dai motori di ricerca per l'indicizzazione",
        correct: false
      }
    ]
  },
  {
    domanda:
      'Qual è la differenza tra il codice contenuto tra il tag head e il tag body',
    risposte: [
      {
        text: 'Il tag body racchiude i contenuti principali, head quelli periferici',
        correct: false
      },
      {
        text: 'Il tag body racchiude tutti gli elementi visibili della pagina, head quelli non visibili',
        correct: true
      },
      {
        text: 'Il tag body racchiude tutti i contenuti dinamici, il tag head quelli statici',
        correct: false
      },
      { text: 'Il tag head non esiste', correct: false }
    ]
  },
  {
    domanda: 'Qual è il rapporto tra HTML e CSS?',
    risposte: [
      { text: 'Un file CSS può importare un file HTML', correct: false },
      { text: 'Nessuna di queste', correct: false },
      {
        text: 'Sono due linguaggi autonomi e non lavorano insieme',
        correct: false
      },
      {
        text: 'Il CSS può influenzare la disposizione degli elementi presenti nella pagina web',
        correct: true
      }
    ]
  },
  {
    domanda: "Cos'è una regola CSS?",
    risposte: [
      {
        text: "È il limite massimo di proprieta' definibili per ogni singolo foglio di stile",
        correct: false
      },
      {
        text: "E' un insieme di standard imposti dal W3C nella creazione di file CSS",
        correct: false
      },
      {
        text: 'È una porzione di codice utilizzata per definire le caratteristiche grafiche di uno o più elementi HTML',
        correct: true
      },
      {
        text: 'Il CSS può influenzare la disposizione degli elementi presenti nella pagina web',
        correct: false
      }
    ]
  },
  {
    domanda: 'Quali elementi possono essere usati in CSS come selettori?',
    risposte: [
      { text: "Il valore dell'attributo id", correct: true },
      { text: 'La posizione del tag rispetto al body', correct: false },
      { text: "Tutti gli elementi presenti nell'head", correct: false },
      { text: 'Nessuna delle precedenti', correct: false }
    ]
  },
  {
    domanda:
      "Qual e' la differenza concettuale tra l'attributo class e l'attributo id?",
    risposte: [
      {
        text: "Un id puo' riferirsi a tag diversi, mentre class solo a tag dello stesso tipo",
        correct: false
      },
      {
        text: "L'attributo class si può applicare a più di un elemento, mentre l'attributo id si può applicare a un solo elemento per pagina",
        correct: true
      },
      {
        text: "L'attributo id e' stato introdotto dalla versione 4 dello standard HTML per sostituire gradualmente l'attributo class",
        correct: false
      },
      {
        text: 'Un tag deve obbligatoriamente avere una classe ma potrebbe non avere un id',
        correct: false
      }
    ]
  }
]
// timer

var timeLeft;
var timer = document.getElementById('timer')
var timerId = setInterval(countdown, 1000)

function countdown () {
  if (timeLeft <= 0) {
    indiceDomanda++
    generaDomanda(indiceDomanda)
  } else {
    timer.innerHTML = timeLeft
    timeLeft--
  }
}
// variabili e funzione per generare le domande e per rendere visibile il div dei risultati una volta terminate le domande
var totaleDomande = document.querySelector('.questionTot')
totaleDomande.innerHTML = ' / ' + domande.length
var indiceDomanda
var messaggio

function generaDomanda (i) {
  timeLeft = 30;
  indiceDomanda = i
  if (indiceDomanda < domande.length) {
    var titoloDomanda = domande[indiceDomanda].domanda
    var risposte = domande[indiceDomanda].risposte
    document.getElementById('testoDomanda').innerHTML = titoloDomanda
    for (j = 0; j < risposte.length; j++) {
      document.getElementById('risposta' + j).innerHTML = risposte[j].text
    }
  } else {
    //nascondo quizContainer
    document.getElementById('quizContainer').innerHTML = '';
    //rendo visibile resultsContainer e ne visualizzo il contenuto
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('percentualiCorrette').innerHTML = percCorrette;
    document.getElementById('percentualiSbagliate').innerHTML = percSbagliate;
    document.getElementById('corrette').innerHTML = risultato;
    document.getElementById('sbagliate').innerHTML = sbagliate;
    var contFeedback = document.querySelectorAll('.domande');
    for (z=0; z<contFeedback.length; z++){
      contFeedback[z].innerHTML = ' / ' + domande.length + ' QUESTIONS';
    }
    generaMessaggio(risultato)
    clearInterval(timerId)
    timer.innerHTML = '';
    //prova grafico
    var ctx = document.getElementById('graficoRisposte').getContext('2d');
    var data = {
      labels: ['Risposte corrette', 'Risposte sbagliate'],
      datasets: [{
        data: [risultato, sbagliate],
        backgroundColor: ['#D20094', '#00FFFF']
      }]
    };
    var options = {
      legend: {
        position: 'bottom'
      }
    };
    
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
    
  }
  var questionNumber = document.querySelector('.questionNumber')
  questionNumber.innerHTML = indiceDomanda + 1
  countdown()
}

generaDomanda(0)

//registrazione del risultato e creazione percentuali
var scelta;
var risultato = 0;
var percCorrette = 0;
var percSbagliate = 0;
var sbagliate = 0;

function registraRisposta (j) {
  var risposte = domande[indiceDomanda].risposte
  if (risposte[j].correct === true) {
    risultato++
  }
  console.log(risultato)
  indiceDomanda++
  generaDomanda(indiceDomanda)

  percCorrette = Math.round((risultato / domande.length) * 100) + '%';
  percSbagliate = Math.round(((domande.length - risultato) / domande.length) * 100) + '%';
  sbagliate = (domande.length - risultato);

}

//generazione messaggio in base a percentuale risultato

function generaMessaggio (risultato) {
  if (risultato >= "60%") {
    document.getElementById('messaggio').innerHTML = "Congratulations! You have passed the test";
  }else {
    document.getElementById('messaggio').innerHTML = "Unfortunately, you have failed the test";
  }
}