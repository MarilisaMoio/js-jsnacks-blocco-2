//Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//creazione dei div
const newDivEven = document.createElement("div");
newDivEven.id = "even";

const newDivOdd = document.createElement("div");
newDivOdd.id = "odd";

//array di partenza
const startingNumbers = [];

const arrayLength = 10;

for (let i = 1; i <= arrayLength; i++){
    const randomNumber = Math.floor(Math.random() * 100);

    startingNumbers.push(randomNumber);
}

const numbersEven = [];

const numbersOdd = [];

//verifica delle condizioni e relativo spostamento nell'array corretto
for (let i = 0; i < startingNumbers.length; i++){
    if (startingNumbers[i] % 2 === 0){
        numbersEven.push(startingNumbers[i]);
    } else {
        numbersOdd.push(startingNumbers[i]);
    }
}

//aggiunta al relativo div con spazi annessi
newDivEven.innerHTML = numbersEven.join(" ");

newDivOdd.innerHTML = numbersOdd.join(" ");

//aggiunta al doc
document.body.append(newDivEven);

document.body.append(newDivOdd);
