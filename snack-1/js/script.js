//L'utente inserisce un numero nel prompt, se è pari stampa il numero, se è dispari stampa il numero successivo

//chiediamo il numero
let userNumber = parseInt(prompt("Inserisci un numero"));

//incrementiamo se dispari
if (userNumber % 2 !== 0){
    userNumber++
}

//output
console.log(userNumber)