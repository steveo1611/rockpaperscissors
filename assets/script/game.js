
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

function play(playerChoice){
    var resultsElem = document.getElementById('results');
    var compChoiceElem = document.getElementById('compChoice')
    //var compChoice = "rock";
//
  var compChoice = (getRandom(1, 3));
var compChoiceName = "";
  if ((playerChoice) == (compChoice)){
      res = ("It's a draw");
  } 
  else if
  (playerChoice == 1 && compChoice == 2){
       res = ("Computer Wins!!!")
  }
  else if 
  (playerChoice == 1 && compChoice == 3){
    res = ("Player Wins!!!")
  }
  else if
  (playerChoice == 2 && compChoice == 1){
    res = ("Player Wins!!!")
  }
  else if
  (playerChoice == 2 && compChoice == 3){
    res = ("Computer Wins!!!")
  }
  else if
  (playerChoice == 3 && compChoice == 1){
    res = ("Player Wins!!!")
  }
  else if
  (playerChoice == 3 && compChoice == 2){
      res = ("Computer Wins!!!!")
  }

if (compChoice == 1) {
    compChoiceName = "Rock"
}
if (compChoice == 2) {
    compChoiceName = "Paper"
}
if (compChoice == 3) {
    compChoiceName = "Scissors"
}

{
    //debugger
    compChoiceElem.innerHTML = `<p> The Computer has chosen <em>"${compChoiceName}"</em></p>`
    resultsElem.innerHTML = `<h2>${res}</h2>`
}

//   if (playerChoice == "paper") {
//       return alert("Player Wins");
//   }
//   else if (playerChoice == "scissor"){
//     return alert("Computer wins");

//   }
//   else {
//       return alert("It's a draw");
//   }

}


//rock = 1 : 2 beats 1 : 1 beats 3 : 3 beats 2
//paper = 2
//sci = 3

// paper = 1:  1 beats 2 : 2 beats 3 : 3 beats 1
// rock = 2:
// sci = 3:

// sci - 1 : 1 beats 2 : 2 beats 3 ; 3 beats 1
// paper - 2: 
// rock - 3: 

