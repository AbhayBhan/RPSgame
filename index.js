const prompt=require("prompt-sync")({sigint:true}); 

const getComputerChoice = () => {
    const randElement = possibleOutcome[Math.floor(Math.random() * possibleOutcome.length)]
    return randElement;
}

const computeResult = () => {
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

var playerChoice;
var computerChoice;
var decision = 0;
var compScore = 0; 
var playerScore = 0;
var possibleOutcome = ["Rock","Paper","Scissor"];



for(var i=0; i<5; ++i){
    playerChoice = prompt("Enter your choice: ");
    computerChoice =  getComputerChoice();
    decision = computeResult(playerChoice,computerChoice);
    switch (decision) {
        case 0:
            console.log("Computer Wins");
            compScore += 1;
            console.log(`Player Score : ${playerScore}   Computer Score : ${compScore}`);
            break;
        case 1:
            console.log("Player Wins");
            playerScore += 1;
            console.log(`Player Score : ${playerScore}   Computer Score : ${compScore}`);
            break;
        case 2:
            console.log("Equal");
            compScore += 1;
            playerScore += 1;
            console.log(`Player Score : ${playerScore}   Computer Score : ${compScore}`);
            break;
    }
}

if(playerScore>compScore){
    console.log("Player has Won the game!");
}
else if(playerScore<compScore){
    console.log("Computer has Won the game!");
}
else{
    console.log("No one Won!");
}