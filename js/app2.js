//computer picks random number.
	var comNum = Math.floor(Math.random()*100);
	
	function difference(a,b) {return Math.abs(a - b)};
	
	//Adding value to User guess.
	function askNumber(){
		var userNum = Number($('#guess').val());
		
		//Variable which adds number to the Selected number
		var lastNum = $("#lastpick li").first().text();

		//difference between user number and computer number 
		var subraction = difference(userNum,comNum);

		//difference between computer number and last number to determine color
		var diffLast = difference(lastNum,comNum);
		
		//Adds number to picked number list
		function lastpick(number){
			$("#lastpick").prepend("<li>" + number + "</li>").children(':first').hide().fadeIn(1000);

		};
		//alert to display to user
		function result(phrase){
			$('.alert').html(phrase).show().effect("slide", {direction: 'up', mode: 'show'}, 1000);
		}

		if(userNum == comNum){
			$('.main').hide()
			$('.winner').fadeIn(3000)
		}
		else if (isNaN(userNum)){
			result("Numbers Only!")
		}

		else if (userNum > comNum) {
			result("Lower!")
			lastpick(userNum);
		}
		else{
			result("Higher!")
			lastpick(userNum);
		};
		
		//Gradient Color generator based on how close they are to comNum 
		if ( subraction < 3){
			$('.main').animate({
				backgroundColor: "red" }, 1500);
				console.log("schnarf");
		}
		else if (subraction < 5) {
			$('.main').animate({
				backgroundColor: "#f6546a"}, 1500);
							console.log("bacon");

		}
		else if (subraction < 10){
			$('.main').animate({
				backgroundColor: "#f06d06" }, 1500);
							console.log("eggs");

		}
		else if (subraction < 20){
			$('.main').animate({
				backgroundColor: "#ff8c00" }, 1500);
							console.log("beans");

		}
		else if (subraction < 30){
			$('.main').animate({
				backgroundColor: "#7fffd4" }, 1500);
							console.log("beers");

		}
		else if (subraction < 40){
			$('.main').animate({
				backgroundColor: "#7EB6FF" }, 1500);
							console.log("yowza");

		}
		else if (subraction < 50){
			$('.main').animate({
				backgroundColor: "#0e77be" }, 1500);
							console.log("Schmello");

		}
		else if (subraction < 60){
			$('.main').animate({
				backgroundColor: "#rgba(112, 119, 246, 1)" }, 1500);
							console.log("turd");

		}
		else if (subraction < 70){
			$('.main').animate({
				backgroundColor: "#4876FF" }, 1500);
							console.log("barf");

		}
		else if (subraction < 80){
			$('.main').animate({
				backgroundColor: "#003eff" }, 1500);
							console.log("bro");

		}
		else if (subraction < 90){
			$('.main').animate({
				backgroundColor: "blue" }, 1500);
							console.log("bal");

		}
		
	};

$(document).ready(function(){
	//On load hides winner screen. 
	$('.winner').hide()

	$('.main').hide().fadeIn(3000)

	//Ability to hit enter 
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




