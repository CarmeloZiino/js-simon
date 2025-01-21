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
