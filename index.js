var userClicked = [];

var randomClicked = [];
// var started = false;
var buttonColours = ["green", "red", "yellow", "blue"];

var started = false;

var level = 0;



$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    randomColourFunc();
    started = true;
  }

});

$(".btn").click(function(){
  var user = $(this).attr("id");
  userClicked.push(user);
  playSound(user);
  $("#" + user).fadeIn(100).fadeOut(100).fadeIn(100);
  checkAnswer();


});


function randomColourFunc() {
  userClicked = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomColour = Math.floor(Math.random()*4);
  var randomCo = buttonColours[randomColour];
  randomClicked.push(randomCo);
  $("#" +randomCo).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomCo);
}


function checkAnswer() {
  if (randomClicked[userClicked.length-1] === userClicked[userClicked.length-1]) {
    if (userClicked.length === randomClicked.length) {
      setTimeout(function () {
        randomColourFunc();
      }, 1000);
    }


  }
  else {
    $("h1").text("Try again");
  }

}

function playSound(name) {
  var audio = new Audio ("sounds/" + name +".mp3");
  audio.play();
}
