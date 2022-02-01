// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a centre and zoom level
let map = L.map('mapid').setView([40.7,-94.5],4);

// add markers to map for LA
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'lightyellow',
//     fillOpacity: 0.25
    
//  }).addTo(map);

// Add a Circle Marker
L.circleMarker([34.0522,-118.2437],{
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
