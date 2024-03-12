//Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


//creazione dei div
const newDivEven = document.createElement("div");
newDivEven.id = "even";

const newDivOdd = document.createElement("div");
newDivOdd.id = "odd";

//array di partenza
let array = [1, 2, 3, 4];

//verifica delle condizioni e relativo spostamento in div
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        newDivEven.append(array[i])
    } else (
        newDivOdd.append(array[i])
    )
}

//aggiunta al doc
document.body.append(newDivEven)
document.body.append(newDivOdd)
