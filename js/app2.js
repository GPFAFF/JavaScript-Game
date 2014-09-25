//computer picks random number
	var comNum = Math.floor(Math.random()*101);
	
	function difference(a,b) {return Math.abs(a - b)};
	
	//main function to run after user has picked number
	function askNumber(){
		var userNum = Number($('#guess').val());
		
		//captures value of last picked number
		var lastNum = $("#lastpick li").first().text();

		//calculates difference between users number/com number and last picked number/com number
		var diff = difference(userNum,comNum);
		var diffLast = difference(lastNum,comNum);
		
		//Shows Last Number Picked. 
		function lastpick(number){
			$("#lastpick").prepend("<li>" + number + "</li>").children(':first').hide().fadeIn(1000);

		};
		//alert to display to user
		function result(phrase){
			$('#alert').html(phrase).show().effect("slide", {direction: 'up', mode: 'show'}, 1000);
		}

		if(userNum == comNum){
			$('#main').hide()
			$('.winner').fadeIn(3000)
		}
		else if (isNaN(userNum)){
			result("Pick a number!")
		}

		else if (userNum > comNum) {
			result("Guess Lower!")
			lastpick(userNum);
		}
		else{
			result("Guess Higher!")
			lastpick(userNum);
		};
		
		//where to change temperture based on distance of guess
		if (diff < 3){
			$('#main').animate({
				backgroundColor: "red" }, 1500);
				console.log("schnarf");
		}
		else if (diff < 5) {
			$('#main').animate({
				backgroundColor: "green" }, 1500);
							console.log("bacon");

		}
		else if (diff < 10){
			$('#main').animate({
				backgroundColor: "orange" }, 1500);
							console.log("eggs");

		}
		else if (diff < 20){
			$('#main').animate({
				backgroundColor: "blue" }, 1500);
							console.log("beans");

		}
		else if (diff < 30){
			$('#main').animate({
				backgroundColor: "purple" }, 1500);
							console.log("beers");

		}
		else if (diff < 40){
			$('#main').animate({
				backgroundColor: "yellow" }, 1500);
							console.log("yowza");

		}
		else if (diff < 50){
			$('#main').animate({
				backgroundColor: "pink" }, 1500);
							console.log("Schmello");

		}
		else if (diff < 60){
			$('#main').animate({
				backgroundColor: "brown" }, 1500);
							console.log("HIIIII");

		}
		
	};

$(document).ready(function(){
	//hides winner screen
	$('.winner').hide()

	$('#main').hide().fadeIn(3000)

	//enable enter button to submit
	$('#guess').keydown(function(event){    
    if(event.keyCode==13){
       $('#pick').trigger('click');
    }
    $('#guess').focus();
});
	//click to pick number
	$('#pick').click(function(){
	askNumber();
	$('#guess').val("")
	});

	//reload page
	$('.reset').click(function() {
    location.reload();
});
});




