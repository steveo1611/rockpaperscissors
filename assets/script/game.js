function play(playerChoice){
  var compChoice = "rock";
  if (playerChoice == "paper") {
      return "Player Wins";
  }
  else if (playerChoice == "scissor"){
      return "Computer wins";
  }
  else {
      return "It's a draw";
  }

}