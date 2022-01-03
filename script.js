const gameAttribute = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;

function computerPlay() {
  let computerSelection =
    gameAttribute[Math.floor(Math.random() * gameAttribute.length)];
  return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return 2;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else {
    return 0;
  }
}

function game() {
  for (i = 1; i < 6; i++) {
    // Player selection
    let playerSelection = prompt(
      "Choose one: paper,rock or scissors"
    ).toLowerCase();
    console.log(`Player choose: ${playerSelection}`);

    // Computer selection
    let computerSelection = computerPlay();
    console.log(`Computer choose: ${computerSelection}`);

    // Prints out the result of the round
    let result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (result === 2) {
      console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
      compScore++;
    } else {
      console.log("Draw!");
    }
    console.log(" ");
  }
  console.log(" ");

  // Prints out the score of the whole game
  if (playerScore > compScore) {
    console.log(
      `You win this game!\nYour score is: ${playerScore}\nComputer score is: ${compScore}`
    );
  } else if (compScore > playerScore) {
    console.log(
      `You loose this game!\nYour score is: ${playerScore}\nComputer score is: ${compScore}`
    );
  } else if (compScore === playerScore) {
    console.log(
      `Draw!\nYour score is: ${playerScore}\nComputer score is: ${compScore}`
    );
  }
}

game();
