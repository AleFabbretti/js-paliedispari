//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

"use stricy"

//chiedo all'utente di inserire una parola

const user = prompt ("Inserisci una parola")

let finalWord = "";

//creo la mia funzione
function palindroma (word) {

    //assegno un ciclo for che decrementa dalla fine della parola all'inizio
    for ( let i = user.length -1; i >= 0; i--) {
        finalWord += user[i];
    }

    //creo una condizione
    if ( user === finalWord) {
        alert("la parola è palindroma")
    }else{
        alert("la parola non è palindroma")
    }
    

}

palindroma(user);

window.location.reload()

