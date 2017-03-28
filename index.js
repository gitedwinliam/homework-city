$(document).ready(function(){

	$("#submit-btn").click(function(event){   
		event.preventDefault();
   

   		//get the value from the input and convert value to lowercase to ignore case sensitivty
		var city = $("#city-type").val().toLowerCase();

		//checks if new york
		if(city == 'new york' || city == 'new york city' || city == 'nyc')
			$('body').attr('class', 'nyc'); //sets class to nyc
		//checks if sf
		else if(city == 'sf' || city == 'san fancisco' || city == 'bay area')
			$('body').attr('class', 'sf'); //sets class to sf
		//checks in la
		else if(city == 'la' || city == 'los angeles' || city == "lax")
			$('body').attr('class', 'la'); //sets class to la
		//checks if austin
		else if(city == "austin" || city == "atx")
			$('body').attr('class', 'austin'); //sets class to austin
		//checks in sydney
		else if(city == "sydney" || city == "syd")
			$('body').attr('class', 'sydney'); //sets class to sydney

    });


});