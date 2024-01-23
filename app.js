let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let playerScore = 0;
let computerScore = 0;
let game = true;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else if (computerChoice === 2) {
    return scissors;
  }
}

function playRound() {
  let playerSelection = window.prompt("What do you choose ?");
  let computerSelection = getComputerChoice();

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    alert("You lose! Computer won the round.");
  } else if (
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Rock")
  ) {
    playerScore++;
    alert("You win! Player won the round.");
  } else {
    alert("DRAW!")
  }
}

while (playerScore < 5 && computerScore < 5) {
  playRound();
}

if (playerScore === 5) {
  alert(`You won the game. Your score is ${playerScore}, and Computer's score is ${computerScore}`);
} else if (computerScore === 5) {
  alert(`Computer won the game, Computer's score is ${computerScore}, and You won the game. Your score is ${playerScore}`);
}
