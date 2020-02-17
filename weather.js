const API_KEY = "28c94e858edcc6d73e8c1e2c590f5670";
const COORDS = "coords";

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
}

function handleGeoError(){
	console.log("Cant access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPostition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
	const loadedCords = localStorage.getItem(COORDS);
	if(loadCoords === null ){
	askForCoords();
	}else{
	}
}

function init(){
	loadCoords();
}

init();