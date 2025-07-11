
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choices = ["rock" , "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    return prompt('Choose "Rock" , "Paper" , or "Scissors"');
}

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.length == computerChoice.length){
        console.log("Tie Round");
    }else if(humanChoice.length == 4 && computerChoice.length == 8){
        console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
        humanScore ++;
    }else if(computerChoice.length == 4 && humanChoice.length == 8){
        console.log("You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice));
        computerScore++;
    }else if(humanChoice.length > computerChoice.length){
        console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
        humanScore ++;
    }else{
        console.log("You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice));
        computerScore++;
    }
    
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore + ' ' + computerScore );
    if(humanScore == computerScore){
        console.log("Tie Game :|");
    }else if(humanScore > computerScore){
        console.log("You Win!");
    }else{
        console.log("You Loose :(");
    }
}

playGame();