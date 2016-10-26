var targetNumber = 39;

$(".numberToGuess").text(targetNumber);

var counter = 0;





var numberOptions = [10, 5, 4, 7];
var increment = numberOptions[Math.round(Math.random())];	
$(".crystalImage").on("click", function() {
	counter +=increment;
	alert("New score:" + counter);
	if (counter === targetNumber){
		alert("You win!");
	}

	else if (counter >= targetNumber){
		alert("You lose!!");
	}
});



	// $(".crystalImage").on("click", function()

	// 	counter +=10;

	// 	alert("Your new score is:" + counter);
	

