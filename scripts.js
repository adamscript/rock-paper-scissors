playerPlay = prompt("Rock Paper Scissors?!");

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
            return "YOU WIN! Rock against paper."
        }
        else if (computerSelection == "Scissors"){
            return "YOU LOSE! Rock against scissors."
        }
    }
    else if (playerSelection == "Paper" || playerSelection == "PAPER" || playerSelection == "paper"){
        if (computerSelection == "Rock"){
            return "YOU WIN! Paper against rock."
        }
        else if (computerSelection == "Paper"){
            return "DRAW! Paper against paper."
        }
        else if (computerSelection == "Scissors"){
            return "YOU LOSE! Paper against scissors."
        }
    }
    else if (playerSelection == "Scissors" || playerSelection == "SCISSORS" || playerSelection == "scissors"){
        if (computerSelection == "Rock"){
            return "YOU LOSE! Scissors against rock."
        }
        else if (computerSelection == "Paper"){
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

console.log(gameRound(playerPlay, computerPlay()));