const button = document.getElementById("button");
const choiceBtns = document.getElementsByClassName("choice-btn");
[...choiceBtns].forEach((button) => {
  button.addEventListener("click", play);
});

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

button.addEventListener("click", startGame);

function startGame() {
  document.getElementById("player-choice").innerText = "";
  document.getElementById("computer-choice").innerText = "";
  document.getElementById("player-score").innerText = "";
  document.getElementById("computer-score").innerText = "";
  document.getElementById("result").innerText = "";
  document.getElementById("final-result").innerText = "";

  [...choiceBtns].forEach((button) => button.removeAttribute("disabled"));
  button.setAttribute("disabled", "");
}

function computerChoice() {
  const choices = ["✊", "✋", "✌"];
  return choices[Math.floor(Math.random() * 3)];
}

function play() {
  const playerChoice = event.target.innerText;
  const compChoice = computerChoice();
  
  

  function showResults() {
    document.getElementById("player-choice").innerText = playerChoice;
    document.getElementById("computer-choice").innerText = compChoice;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
  }

  if (
    (playerChoice === "✊" && compChoice === "✌") ||
    (playerChoice === "✋" && compChoice === "✊") ||
    (playerChoice === "✌" && compChoice === "✋")
  ) {
    rounds++;
    playerScore++;
    document.getElementById("result").innerText = `You win this round! ${playerChoice} beats ${compChoice}!`;
    showResults();
    checkWin();
  } else if (
    (playerChoice === "✊" && compChoice === "✋") ||
    (playerChoice === "✋" && compChoice === "✌") ||
    (playerChoice === "✌" && compChoice === "✊")
  ) {
    rounds++;
    computerScore++;
    document.getElementById("result").innerText = `You loose this round! ${compChoice} beats ${playerChoice}!`;

    showResults();
    checkWin();
  } else {
    rounds++;
    document.getElementById("result").innerText = `It's a tie!`;
    showResults();
    checkWin();
  }
}

function checkWin() {
    const finalResult = document.getElementById("final-result");
  if (rounds === 5) {
    if (playerScore > computerScore) {
        finalResult.innerText = `Game Over! Your win!`;
    } else if (playerScore < computerScore) {
        finalResult.innerText = `Game Over! Your lose...`;
    } else {
        finalResult.innerText = `Game Over! It's a tie!`;
    }
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    [...choiceBtns].forEach((button) => button.setAttribute("disabled", ""));
    button.innerText = "Restart Game";
    button.removeAttribute("disabled");
  }
}
