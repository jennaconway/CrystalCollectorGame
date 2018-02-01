var userGuess = 0;

var userscore = 0;
var wins = 0;
var losses = 0;
//vars for keeping score

var targetNum = Math.floor(Math.random() * (100 + 19) + 19);
console.log(targetNum);

$("#targetNum").text(targetNum);
//rendering the random targetnumber to the id in the HTML doc


var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal1);

var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal2);

var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal3);

var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal4);

$("#crystal1").on("click", function(){
    userGuess += crystal1;
    console.log(userGuess);
});

$("#crystal2").on("click", function(){
    userGuess += crystal2;
    console.log(userGuess);
});

$("#crystal3").on("click", function(){
    userGuess += crystal3;
    console.log(userGuess);
});

$("#crystal4").on("click", function(){
    userGuess += crystal4;
    console.log(userGuess);
});

function winCheck(){
    if(userGuess > targetNum) {
        console.log("you lost");
    } else if(userGuess === targetNum){
        console.log("win");
    }
}

$("#scoreWins").text(wins);
$("#scoreLosses").text(losses);

function wins(){
    wins++;
    $("#scoreWins").text(wins);
}






