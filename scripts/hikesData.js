"use strict";
/* data for map */
let hikesData = {
  "locations": [
    {
      "fullName": "Lodato Park Loop Trail",
      "latitude": "37.052646",
      "longitude": "-122.007602",
      "pageLink": "./lodato.html"
    },
    {
      "fullName": "Garden Paths at Enterprise Technology Center",
      "latitude": "37.06435",
      "longitude": "-121.99934",
      "pageLink": ""
    },
    {
      "fullName": "Shark Fin Cove and Cliff Trails",
      "latitude": "37.00414",
      "longitude": "-122.18541",
      "pageLink": ""
    },
    {
      "fullName": "Gold Gulch Trail",
      "latitude": "37.038611",
      "longitude": "-122.071251",
      "pageLink": ""
    }
  ]
};

/* set initial zoom so that all locations are visible and approximately center */
let zoomLevel = 13;
	
/* create Leaflet map object, place in container, and set initial center and zoom  */
let map = L.map('map_container').setView([hikesData["locations"][3].latitude, hikesData["locations"][3].longitude], zoomLevel);

/* required attribution */
let attributionHtml = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    
/* create tile layer with attribution */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: attributionHtml }).addTo(map);

/* Iterate through hikesData and for each location, create marker, add it to the map, create popup with name and link to location's page */
hikesData["locations"].forEach(location => {
  let myMarker = L.marker([location.latitude, location.longitude]).addTo(map);
  myMarker.bindPopup(location.fullName + `<br>` + `<a href='${location.pageLink}'>Go to location page!</a>`);
});
