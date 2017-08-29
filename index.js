function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function displayRestaurant() {
	// create restaurant list
	restaurantArray = ['Meet Mee', 'Surawon', 'Sushi Zanmai', 'Klang Teluk Pulai Bat Kut Teh', 'Dim Sum']
	arrayLength = restaurantArray.length;
	rand = getRandomInt(0, arrayLength);

  // display restaurant
  restaurant = document.getElementById('restaurant')
  restaurant.innerHTML = restaurantArray[rand]	
}

function startDisplayRestaurant() {
	// clear sentence
	chosenRestaurant = document.getElementById('chosen-restaurant');
	chosenRestaurant.innerHTML = "";
	
  // display list of restaurant in interval
  var startTimer = setInterval(displayRestaurant, 2000);
}

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", startDisplayRestaurant)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", functionName);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);