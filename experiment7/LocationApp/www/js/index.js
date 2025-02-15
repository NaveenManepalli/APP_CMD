document.addEventListener('deviceready', onDeviceReady, false); 
function onDeviceReady() { 
document.getElementById('getLocationBtn').addEventListener('click', getLocation); 
} 
function getLocation() { 
navigator.geolocation.getCurrentPosition(onSuccess, onError); 
} 
function onSuccess(position) { 
var latitude = position.coords.latitude; 
var longitude = position.coords.longitude; 
document.getElementById('location').innerHTML = 'Latitude: ' + latitude + 
'<br>Longitude: ' + longitude; 
} 
function onError(error) { 
alert('Error getting location: ' + error.message); 
} 