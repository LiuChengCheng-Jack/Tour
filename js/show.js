 var mymap = L.map('map').setView([34.76, 113.65], 4);
 L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 	maxZoom: 18
 }).addTo(mymap);