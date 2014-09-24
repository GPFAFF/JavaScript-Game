
$(document).ready(function(){

	function WinningNumberGenerator(){
		WinningNumber = (Math.floor(Math.random()*100));
		console.log("WinningNumber = " + WinningNumber);
	}

	WinningNumber();

	function inputNumber(){
		var userNumber = Number($('#guess').val());
	}

	var subraction = difference(userNumber, WinningNumber);
	var lastDifference = difference(lastNumber, WinningNumber);

		if(userNumber === WinningNumber){
			$('.game').hide();
			$('.winner').fadeIn(1000);
		}
		else if ((WinningNumber - userNumber) > 75){
			document.body.style.background{
				color; 
			}
		}
		else if ((WinningNumber - userNumber) > 65){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 55){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 45){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 35){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 25){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 15){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 10){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 5){
			changeBackground();
		}
		else if ((WinningNumber - userNumber) > 1){
			changeBackground();
		}
		else{

		}
	});

function changeBackground(color) {
	document.body.style.background = color;
}




