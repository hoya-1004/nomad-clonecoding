const weather = document.querySelector(".js-weather");

const API_KEY = "28c94e858edcc6d73e8c1e2c590f5670";
const COORDS = "coords";

function getWeather(lat, lng){
	fetch(``).then(function(response){
		return response.json();
	}).then(function(json){
		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;

	})
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleeGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
	latitude,
	longtiude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude)
}

function handleGeoError(){
	console.log("Cant access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPostition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null ){
	askForCoords();
	}else{
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init(){
	loadCoords();
}

init();