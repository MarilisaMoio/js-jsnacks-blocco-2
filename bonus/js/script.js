//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

//richiesta numero
const number = prompt("Inserisci qui un numero da 4 cifre (ma se ne metti di più funziona lo stesso)")

//inizializzazione del contatore
let sum = 0;

//somma dei vari numeri
for (let i = 0; i < number.length; i++ ){
    sum += parseInt(number[i]);
}

//output
console.log(sum);