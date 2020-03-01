var counter=100;
var correct=0;
var incorrect=0;
var blanks=0;
var answer=[];




function startGame(){
    $("#start-container").hide();
    $("#game-container").show();

};

function Score(){
    $("#game-container").hide();
    $("#score-container").show();
};

function updateGame(){
    $("#correct-answers-div").html(correct);
    $("#incorrect-answers-div").html(incorrect);
    $("#unanswered-div").html(blanks);
    $("#time-remaining").text(counter);
};

// Submits the game form
function submitForm() {
	var answer1 = $('input[name="questionOne"]:checked').val();   // stores the value of the x question that is checked into a variable
	var answer2 = $('input[name="questionTwo"]:checked').val();   
	var answer3 = $('input[name="questionThree"]:checked').val();
	var answer4 = $('input[name="questionFour"]:checked').val();
	var answer5 = $('input[name="questionFive"]:checked').val();
	var answer6 = $('input[name="questionSix"]:checked').val();
	var answer7 = $('input[name="questionSeven"]:checked').val();
	var answer8 = $('input[name="questionEight"]:checked').val();
	var answer9 = $('input[name="questionNine"]:checked').val();
	var answer10 = $('input[name="questionTen"]:checked').val();
	answer.push(answer1);                                   
	answer.push(answer2);                             
	answer.push(answer3);                                    
	answer.push(answer4);                                    
	answer.push(answer5);                                  
	answer.push(answer6);                                    
	answer.push(answer7);                                 
	answer.push(answer9);                                   
	answer.push(answer10);                                   


	// Checks whether each answer in the array is correct,incorrect,or unanswered and increments the appropriate variables
	for (var i = 0; i < answer.length; i++) {

		if (answer[i] === "correct") {
			correct++;
			updateGame();
		}

		else if (answer[i] === "incorrect") {
			incorrect++;
			updateGame();
		}

		else {
			blanks++;
			updateGame();
		}
	};
};


// On document load...
$(document).ready(function() {

	// On start button click...
	$("#start-button").on("click", function(){
		startGame();
		updateGame();
		var interval = setInterval(function() {
	   	 	counter--;                              

	    	// When the counter reaches 0...
	    	if (counter == 0) {               
        		submitForm();                       
        		clearInterval(interval);            
        		Score();                        
    		}
		}, 1000);
		updateGame();

		// On submit button click...
		$("#submit-button").on("click", function(){
			event.preventDefault();                  
			submitForm();                            
			Score();
            clearInterval(interval); 
                           
		});
	});
});

//I could not figure out how to reset the time
