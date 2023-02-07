var nome= 'Aldo';
let tipo='cliente';
const numeroDecimale='3.14'

document.getElementById('concatena').innerHTML = nome + ', '+ tipo + ', ' + numeroDecimale;

var catena= nome + ', '+ tipo + ', ' + numeroDecimale;
document.getElementById('concatena2').innerHTML= catena;

var nomeCliente='Mario';

document.getElementById('var').innerHTML = nomeCliente;
document.getElementById('final').innerHTML = nomeCliente;
document.getElementById('let2').innerHTML = nomeCliente;

{
    let nomeCliente='Carla';

    document.getElementById('let').innerHTML = nomeCliente;
    document.getElementById('let3').innerHTML = nomeCliente;
    document.getElementById('final2').innerHTML = nomeCliente;  
}

var iniziale= 15;
document.getElementById('iniziale').innerHTML += iniziale;
document.getElementById('valore1').innerHTML += iniziale+iniziale + ', '+ (iniziale+iniziale+1);
document.getElementById('valore2').innerHTML += iniziale-10 + ', '+ (iniziale-11);
document.getElementById('valore3').innerHTML += iniziale*3;
document.getElementById('valore4').innerHTML += iniziale/3;
document.getElementById('valore5').innerHTML += iniziale + ' '+ 'è un numero'
