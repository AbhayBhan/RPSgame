const getComputerChoice = () => {
    const randElement = possibleOutcome[Math.floor(Math.random() * possibleOutcome.length)]
    return randElement;
}

const computeResult = (playerChoice,computerChoice) => {
    if(playerChoice === computerChoice){
        return 2;
    }
    if(playerChoice == "Rock" && computerChoice == "Scissor"){
        return 1;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        return 1;
    }
    else if(playerChoice == "Scissor" && computerChoice == "Paper"){
        return 1;
    }
    else{
        return 0;
    }
}

const btns = document.querySelectorAll('.choice-btn');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
       gameRuntime(btn.value); 
    })
})

const main = document.querySelector('.container');
const score = document.createElement('div');
score.classList.add('scoring');


var playerChoice;
var computerChoice;
var decision = 0;
var possibleOutcome = ["Rock","Paper","Scissor"];

const gameRuntime = (playerChoice) => {
    computerChoice =  getComputerChoice();
    decision = computeResult(playerChoice,computerChoice);
    switch (decision) {
    case 0:
        score.innerHTML = "<h1>Computer has Won!</h1>";
        main.append(score);
        break;
    case 1:
        score.innerHTML = "<h1>Player has Won!</h1>";
        main.append(score);
        break;
    case 2:
        score.innerHTML = "<h1>No one Won!</h1>";
        main.append(score);
        break;
    }
}
