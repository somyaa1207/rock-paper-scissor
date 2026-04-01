let userScore = 0;
let computerScore = 0;


function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw 😐";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win 🎉";
    userScore++;
  } else {
    result = "You Lose 😢";
    computerScore++;
  }

  // ✅ Update scores
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;

  // ✅ Update message (THIS IS IMPORTANT)
  const msg = document.getElementById("message");
  msg.innerText = result;

  // Optional: change color like video
  if (result.includes("Win")) {
    msg.style.backgroundColor = "green";
  } else if (result.includes("Lose")) {
    msg.style.backgroundColor = "red";
  } else {
    msg.style.backgroundColor = "gray";
  }

  // Console (optional)
  console.log("user choice =", userChoice);
  console.log("comp choice =", computerChoice);
  console.log(result);
}
