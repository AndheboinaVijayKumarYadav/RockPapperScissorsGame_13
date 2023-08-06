// Variables
const playerEl = document.querySelector('.playerChoice'),
      computerEl = document.querySelector('.computerChoice'),
      resultEl = document.querySelector('.result'),
      rockEl = document.querySelector('.rock'),
      paperEl = document.querySelector('.paper'),
      scissorEl = document.querySelector('.scissor'),
      buttonsEl = document.querySelectorAll('.button');

// array of choices
const choices = ['rock','paper','scissor'];


/*

// adding event listener
rockEl.addEventListener('click', () => {
    const rock = rockEl.innerText.toLowerCase();
    let random = randomNumber();
    let computer = choices[random];
    displayResult(rock,computer);
});
paperEl.addEventListener('click',() => {
    let random = randomNumber();
    let computer = choices[random];
    const paper = paperEl.innerText.toLowerCase();
    displayResult(paper,computer);
});
scissorEl.addEventListener('click',() => {
    let random = randomNumber();
    let computer = choices[random];
    const scissor = scissorEl.innerText.toLowerCase();
    displayResult(scissor,computer);
});

*/

/* function randomNumber(){
    let randomNumber= Math.floor((Math.random()*3));
    return randomNumber;
} */

// better way of doing it
buttonsEl.forEach(button => button.addEventListener('click',() => {
     const player = button.innerText.toLowerCase();
     const computer = computerChoice();
     displayResult(player,computer);
}))


function computerChoice(){
    const randomValue = Math.floor(Math.random() * 3);
    return choices[randomValue];
}

function displayResult(value1,value2){
    playerEl.innerText = value1;
    computerEl.innerText = value2;

    if((value1 === 'rock' && value2 === 'paper') || (value1 === 'paper' && value2 === 'scissor') || (value1 === 'scissor' && value2 === 'rock')){
        resultEl.innerText = "Loose"
        
    }
    else if(value1 === value2){
        resultEl.innerText = "Draw"
    }
    else{
        resultEl.innerText = "Win";
    }

}