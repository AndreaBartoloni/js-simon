// creare numeri casuali da 1 a 5

// far partire un timer di 30 secondi e allo scadere rimuovere i numeri 

// mandare 5 prompt diversi e salvare il valore inserito

// confrontare se i numeri inseriti nei propt sono presenti nei numeri generati
// document.getElementById("numeri").innerHTML = "";

let randomNumber = [];
let checknumber = [];
for(let i = 1; i <=5;){
    let numeroCasuale = Math.floor(Math.random() * 20) + 1;
    
    if(!checknumber.includes(numeroCasuale)){
         randomNumber.push(numeroCasuale);
         checknumber.push(numeroCasuale);
         i++;
    }
}

console.log(randomNumber);

let second = 3;
let time = setInterval(function(){
  if(second >= 0) {
    console.log(second);
    second--;
  }else{
    clearInterval(time);
  }
  if(second == 0){
    
  }
}, 1000);