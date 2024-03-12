//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//acquisici le due parole
const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci un'altra parola");

//compara la lunghezza e printa di conseguenza
if (firstWord.length > secondWord.length){
    console.log(secondWord, firstWord)
} else { //vale anche per pari lunghezza
    console.log(firstWord, secondWord)
}