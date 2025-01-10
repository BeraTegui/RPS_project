let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";

let getComputerChoice = () =>{
    let num = Math.random();
    if(num < 0.33){
        computerChoice = "rock";
    } else if(num > 0.33 && num < 0.66){
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
}

let getHumanChoice = () =>{
    humanChoice = prompt("What is your choice??")
    humanChoice = humanChoice.toLowerCase();
}


let playRound = () =>{
    getComputerChoice();
    getHumanChoice();
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Won!!");
        humanScore++;
        console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
    } else if(computerChoice === humanChoice){
        console.log("It's a tie! No one wins")
    }else{
        console.log("You lost!!")
        computerScore++;
        console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
    }
}

let playGame = () =>{
    let i = 0;
    while(i < 5){
        playRound();
        i++;
    };
    if(humanScore > computerScore){
        console.log(` The game has finished...You're the winner! Congratulations Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
    } else if(humanScore === computerScore){
        console.log(`It's a tie, no one wins! Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
    } else{
        console.log(` The game has finished...Computer wins! Your score is: ${humanScore} and the computer's score is: ${computerScore}`)
    }
}
