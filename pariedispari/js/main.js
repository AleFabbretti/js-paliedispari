/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

"use strict"

/* ------FUNCTION------*/

//genero un numero random da 1 a 5 per la cpu attraverso una funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//creo una funzione per stabilire se la somma dei due numeri è pari o dispari 

function winner(number){
    //creo una variabile

    if(number % 2 === 0){
        return true;
    }
    return false;

}


/* ------MAIN------*/

//chiediamo all'utente di scegliere tra pari o dispari
const choise = prompt("Scegli tra pari o dispari");

//chiediamo all'utente di scegliere un numero tra 1 e 5
const numberChoise = Number(prompt("scegli un numero da 1 a 5"));

const cpuNumber = getRndInteger(1, 5);
console.log(cpuNumber);

const total = numberChoise + cpuNumber;
console.log(total);

console.log(winner(total));

if (winner(total) === true && choise === "pari"){
    alert("Hai vinto")
}else if (winner(total) === false && choise === "dispari"){
    alert("Hai vinto");
} else {
    alert("Hai perso");
}

window.location.reload();
