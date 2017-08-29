function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomHex() {
	// 16777215 == ffffff in decimal
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function displayRestaurant() {
	// create restaurant list
	restaurantArray = ['Meet Mee', 'Surawon', 'Sushi Zanmai', 'Klang Teluk Pulai Bat Kut Teh', 'Dim Sum']
	arrayLength = restaurantArray.length;
	randInt = getRandomInt(0, arrayLength);
	console.log(randInt);
  randHex = getRandomHex();
  console.log(randHex);

  // display restaurant in random order and random color
  restaurant = document.getElementById('restaurant')
  restaurant.innerHTML = restaurantArray[randInt]	
  restaurant.style.color = randHex;
}

function startDisplayRestaurant() {
	// clear sentence
	chosenRestaurant = document.getElementById('chosen-restaurant');
	chosenRestaurant.innerHTML = "";
	
  // display list of restaurant in interval
  timer = setInterval(displayRestaurant, 1000);
}

function getRestaurant() {
  // stop timer
  clearInterval(timer);
}

function addRestaurantListener(){
  var timer;

  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", startDisplayRestaurant)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);