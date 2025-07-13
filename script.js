
let humanScore = 0;
let computerScore = 0;
let rounds = 0;


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
        result.textContent = "Tie Round";
        
    }else if(humanChoice.length == 4 && computerChoice.length == 8){
        console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
        result.textContent = "You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice);
        humanScore ++;
    }else if(computerChoice.length == 4 && humanChoice.length == 8){
        console.log("You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice));
        result.textContent = "You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice);
        computerScore++;
    }else if(humanChoice.length > computerChoice.length){
        console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
        result.textContent = "You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice);
        humanScore ++;
    }else{
        console.log("You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice));
        result.textContent = "You loose! " + capitalize(humanChoice) + " looses to " + capitalize(computerChoice);
        computerScore++;
    }
    score.textContent = `You : ${humanScore} vs ${computerScore} : Computer`;
    rounds++;
    gameEnding();
}

function gameEnding(){
    if(rounds == 5){
        rock.disabled = true;
        scissors.disabled = true;
        paper.disabled = true;
        if(humanScore == computerScore){
            console.log("Tie Game :|");
            result.textContent = "Tie Game :|";
        }else if(humanScore > computerScore){
            console.log("You Win!");
            result.textContent = "You Win!";
        }else{
            console.log("You Loose :(");
            result.textContent = "You Loose :(";
        }
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

//playGame();

const container = document.querySelector("#container");

// creating the three buttons
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const result = document.createElement('div');
const score = document.createElement('div');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
result.textContent = "";
score.textContent = "";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(result);
container.appendChild(score);

rock.addEventListener("click" , function(e){
    playRound(e.target.textContent, getComputerChoice());
});
paper.addEventListener("click" , function(e){
    playRound(e.target.textContent, getComputerChoice());
});
scissors.addEventListener("click" , function(e){
    playRound(e.target.textContent, getComputerChoice());
});

