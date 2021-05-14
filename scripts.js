let playerScore;
let computerScore;

function computerPlay(){
    var computerSelection = ["Rock", "Paper", "Scissors"];
    const num = Math.floor(Math.random() * 2.9)
    return computerSelection[num];
}

function gameRound(playerSelection, computerSelection){
    if (playerSelection == "Rock" || playerSelection == "ROCK" || playerSelection == "rock"){
        if (computerSelection == "Rock"){
            return "DRAW! Rock against rock."
        }
        else if (computerSelection == "Paper"){
            playerScore += 1;
            return "YOU WIN! Rock against paper."
        }
        else if (computerSelection == "Scissors"){
            computerScore += 1;
            return "YOU LOSE! Rock against scissors."
        }
    }
    else if (playerSelection == "Paper" || playerSelection == "PAPER" || playerSelection == "paper"){
        if (computerSelection == "Rock"){
            playerScore += 1;
            return "YOU WIN! Paper against rock."
        }
        else if (computerSelection == "Paper"){
            return "DRAW! Paper against paper."
        }
        else if (computerSelection == "Scissors"){
            computerScore += 1;
            return "YOU LOSE! Paper against scissors."
        }
    }
    else if (playerSelection == "Scissors" || playerSelection == "SCISSORS" || playerSelection == "scissors"){
        if (computerSelection == "Rock"){
            computerScore += 1;
            return "YOU LOSE! Scissors against rock."
        }
        else if (computerSelection == "Paper"){
            playerScore += 1;
            return "YOU WIN! Scissors against paper."
        }
        else if (computerSelection == "Scissors"){
            return "DRAW! Scissors against scissors."
        }
    }
    else{
        return "Please type in 'rock', 'paper', or 'scissors'"
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    for(let i = 1; i <= 5; i++){
        playerPlay = prompt("Rock Paper Scissors?!");
        console.log(gameRound(playerPlay, computerPlay()))
    }
    if (playerScore > computerScore){
        console.log("YOU ARE THE WINNER!");
    }
    else if (playerScore < computerScore){
        console.log("COMPUTER IS THE WINNER!");
    }
    else {
        console.log("IT'S A DRAW!");
    }
}

game()