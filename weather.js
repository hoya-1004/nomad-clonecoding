const COORDS = 'coords';

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
