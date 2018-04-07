//---------------------------------------------------------------
// Javascript logic for Crystal Collector game
//---------------------------------------------------------------

// Declare globals
var wins = 0;
var losses = 0;
var usersTotal = 0;
var winningNumber = 0;
var gameOver = false;
var gameWon = false;

start();

// Main game loop
//---------------------------------------------------------------
// When an element with class "crystal" is clicked
$("body").on("click", ".crystal", function(){

  if (!gameOver){
    usersTotal += parseInt($(this).attr("value"));
    // $("#total-score").html(usersTotal);
  } 

  if ((usersTotal > winningNumber) && (!gameOver)){
    gameOver = true;
    losses++;
    // $("#total-score").html(usersTotal);
    $(".jumbotron h1").text("You Lose!!").css("color", "red");

  } else if ((usersTotal == winningNumber) && (!gameOver)){
    gameOver = true;
    gameWon = true;
    wins++;
    // $("#total-score").html(usersTotal);
    $(".jumbotron h1").text("You Win!!").css("color", "green");
  }

  // alert($(this).attr("value"));

  // Update game stats
  $("#total-score").html(usersTotal);


  if (gameOver) { start(); }
});


function start(){
  usersTotal = 0;
  winningNumber = 0;
  gameOver = false;
  gameWon = false;  
  $("#total-score").html(usersTotal);
  $("#wins").html(wins);
  $("#losses").html(losses);
  // $(".jumbotron h1").text("Crystal Collectors").css("color", "black");
  
  // Set the hidden crystal values for this game
  // Loop through elements with crystal class
  $(".crystal").each(function(){
    // Get a random number between 1 and 12
    var randNum = Math.floor(Math.random() * Math.floor(11)) + 1;
    // Set the value of this crystal
    $(this).attr("value", randNum);
  });

  // Get the random winning number between 19 and 120 (more efficent way?)
  winningNumber = Math.floor(Math.random() * Math.floor(119)) + 1;
  if (winningNumber < 19) {winningNumber = 19;}

  // Display winning number
  $("#winning-number").text(winningNumber);
}




// Start function
// Initialize values for this game

// Reset function