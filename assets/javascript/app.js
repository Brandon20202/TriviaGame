var counter=90;
var correct=0;
var incorrect=0;
var blanks=0;



function startGame(){
    $("#start-container").hide();
    $("#game-container").show();

};

function Score(){
    $("#game-container").hide();
    $("#score-container").show();
};

function UpdateGame(){
    $("#correct-answers-div").html(correct);
    $("incorrect-answers-div").html(incorrect);
    $("unanswered-div").html(blanks);
    $("#time-remaining").text(counter);
};




