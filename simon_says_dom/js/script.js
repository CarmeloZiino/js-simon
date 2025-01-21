/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
>
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"*/



// 1. Imposto Variabili che manipolano il dom

const countDown = document.getElementById("instructions")
const numberList = document.getElementById("numbers-list")
const answersForm = document.getElementById("answers-form")
const inputGroup = document.getElementById("input-group")
const messageElement = document.getElementById("message")


// 2. Imposto Variabili che definiscono il tempo del CountDown e i numeri che compaiono

const timeDuration = 30;
const numeriPossibili = 5;


// 3. Il Programma genera 5 numeri casuali da 1 a 100 e li stampa in pagina

const randomNumbers = [];


for (let i = 0; randomNumbers.length < numeriPossibili; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  
  randomNumbers.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    numberList.appendChild(li);
  });

// 4. Il programma fa partire un countdown di 30 secondi

let time = timeDuration;
const countdownInterval = setInterval( countDownGo , 1000);


function countDownGo () {
    countDown.innerHTML = `Rimangono: ${time} s`; 
  
    if (time == 0) {
      clearInterval(countdownInterval);
      countDown.innerHTML = `Bene! Adesso inserisci i numeri che hai visto qui sotto:`  
     numberList.classList.add("d-none");
     answersForm.classList.remove("d-none");      
    } else {
      time--;
    }
  }

/* 5. Una volta comparsi gli input, l'utente inserirà i numeri che ipoteticamente ha visto.
Il programma deve:
1. raccogliere i numeri dagli input;
2. Confronta i vari numeri con quelli comparsi
3. Stampa un messaggio dove dice quali numeri sono uguali
*/

answersForm.addEventListener ("submit" , function (){
    event.preventDefault();

 const userNumbers = [ //con .querySelectorAll controlla gli input e quindi il valore che l'utente ha inserito
     document.querySelectorAll("input")[0].value,
     document.querySelectorAll("input")[1].value,
     document.querySelectorAll("input")[2].value,
     document.querySelectorAll("input")[3].value,
     document.querySelectorAll("input")[4].value,
   ];

   let correctNumbers = [];
   for (let i=0 ; i < userNumbers.length; i++) {  // con questo ciclo verifico se i numeri che ha inserito l'utente siano i medesimi che il computer ha stampato. Se è sì, prende l'informazione e la stampa sulla pagina.
if (randomNumbers.includes(parseInt(userNumbers[i]))){
    correctNumbers.push(userNumbers[i])
}}

if (correctNumbers.length > 0) { // Condizioni per le quali se ha inserito 1 o + numeri uguali, stampa un messaggio di congratulazioni. Se no amen, e ci riprova
    messageElement.innerHTML = `Ottimo! Hai indovinato i seguenti numeri: ${correctNumbers.join(", ")}`;
  } else {
    messageElement.innerHTML = "Non hai indovinato nessun numero. Riprova!";
  }
});