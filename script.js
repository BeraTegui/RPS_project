// Commented to work on branching TOP lesson

/* 
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
 */

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

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
    humanChoice = event.target.textContent;
    humanChoice = humanChoice.toLowerCase();
}

let playRound = () =>{
    getComputerChoice();
    getHumanChoice();
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
        /* console.log("You Won!!"); */
        humanScore++;
        /* console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`) */
    } else if(computerChoice === humanChoice){
        /* console.log("It's a tie! No one wins") */
    }else{
        /* console.log("You lost!!") */
        computerScore++;
        /* console.log(`Your score is: ${humanScore} and the computer's score is: ${computerScore}`) */
    }
}

rock.addEventListener('click', () =>{
    playRound();
    const results = document.createElement('div');
    results.textContent = "Your score: " + humanScore + " \nComputer's Score: " + computerScore;
    document.querySelector('body').appendChild(results);

});
paper.addEventListener('click', () =>{
    playRound();
    const results = document.createElement('div');
    results.textContent = "Your score: " + humanScore + " \nComputer's Score: " + computerScore;
    document.querySelector('body').appendChild(results);
});
scissors.addEventListener('click', () =>{
    playRound();
    const results = document.createElement('div');
    results.textContent = "Your score: " + humanScore + " \nComputer's Score: " + computerScore;
    document.querySelector('body').appendChild(results);
});




