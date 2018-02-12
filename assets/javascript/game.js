$(document).ready(function() {

var userscore = 0;
$("#userscore").text(userscore);
var wins = 0;
$("#scoreWins").text(wins);
var losses = 0;
$("#scoreLosses").text(losses);
//var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
//vars for keeping score

var targetNum = Math.floor(Math.random() * (100 + 19) + 19);
console.log(targetNum);

$("#targetNum").text(targetNum);
//rendering the random targetnumber to the id in the HTML doc

//function to set data-value equal too math.floor
//how to set the value of an attribute

var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal1);

var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal2);

var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal3);

var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal4);
console.log(typeof crystal1);

var crystalval1 = crystal1;
console.log(crystalval1);
var crystalval2 = crystal2;
var crystalval3 = crystal3;
var crystalval4 = crystal4;

// $("#crystal1").on("click", function(){
//     userscore += crystal1;

//     console.log(userscore);
// });

// $("#crystal2").on("click", function(){
//     userscore += crystal2;
//     console.log(userscore);
// });

// $("#crystal3").on("click", function(){
//     userscore += crystal3;
//     console.log(userscore);
// });

// $("#crystal4").on("click", function(){
//     userscore += crystal4;
//     console.log(userscore);
// });

function winCheck(){
    if(userscore > targetNum) {
        console.log("you lost");
    } else if(userscore === targetNum){
        console.log("win");
    }
}


function winner(){
    wins++;
    $("#scoreWins").text(wins);
    userscore = 0;
    targetNum = Math.floor(Math.random() * (100 + 19) + 19);
    $("#targetNum").text(targetNum);
    $("#userscore").text(userscore);
}

function loser(){
    losses++;
    $("#scoreLosses").text(losses);
    userscore = 0;
    targetNum = Math.floor(Math.random() * (100 + 19) + 19);
    $("#targetNum").text(targetNum);
    $("#userscore").text(userscore);
}



//update guessing box/user's score//
$("#crystal1").click(function(){
    //pushcrystal values to the score//
    userscore += crystalval1;
    $("#userscore").text(userscore);
    console.log(crystalval1);

    if (userscore > targetNum){
        loser();
    } else if(userscore === targetNum){
        winner();
    }
});

$("#crystal2").click(function(){
    userscore += crystalval2;
    $("#userscore").text(userscore);

    if (userscore > targetNum){
        loser();
    } else if(userscore === targetNum){
        winner();
    }
});

$("#crystal3").click(function(){
    userscore += crystalval3;
    $("#userscore").text(userscore);

    if (userscore > targetNum){
        loser();
    } else if(userscore === targetNum){
        winner();
    }
});

$("#crystal4").click(function(){
    userscore += crystalval4;
    $("#userscore").text(userscore);

    if (userscore > targetNum){
        loser();
    } else if(userscore === targetNum){
        winner();
    }
});

// var userscore = function(num){
//     crystalval1 += crystalval2 += crystalval3 += crystalval4;
//     $("#userscore").value(userscore);
//     console.log(typeof userscore);
// }

});





