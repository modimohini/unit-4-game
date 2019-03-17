var wins = 0;
var losses = 0;
var computerScore = 39;
var yourScore = 0;
var newCyVal1 = 1;
var newCyVal2 = 5;
var newCyVal3 = 2;

function random(){
  randomNumber = Math.floor(Math.random() * 52);
  };
console.log(wins);

$("#c1").on("click", function() {
    yourScore = yourScore+newCyVal1;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });
  
  $("#c2").on("click", function() {
    yourScore = yourScore+newCyVal2;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });

  $("#c3").on("click", function() {
    yourScore = yourScore+5;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });

  $("#c4").on("click", function() {
    yourScore = yourScore+newCyVal3;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });

function result() {
    if (yourScore === computerScore) {
        wins++;
        random();
        computerScore = randomNumber;
        yourScore = 0;
        $("#wins").text("Wins: "+ wins);
        $("#yourScore").text("Your Score: "+ yourScore);
        $("#computerScore").text("Computer Score: "+ computerScore);

    }
    else if (yourScore > computerScore) {
        losses++;
        random();
        computerScore = randomNumber;
        yourScore = 0;
        newCyVal1= newCyVal1 + 2;
        newCyVal2= newCyVal2 + 1;
        newCyVal3= newCyVal3 + 3;
        $("#losses").text("Loses: "+ losses);
        $("#yourScore").text("Your Score: "+ yourScore);
        $("#computerScore").text("Computer Score: "+ computerScore);
    }
}

