// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a centre and zoom level using SetView
// let map = L.map('mapid').setView([30, 30], 2);



// // Grabbing our GeoJSON data using Point to Layer
// L.geoJSON(sanFranAirport, {
//     // turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "<hr>" + feature.properties.city + ", " + feature.properties.country  + '</h2>');
//         }
//     }).addTo(map);

// // grabbing GeoJSON with onEachFeature
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + '<hr>Airport Name: ' + feature.properties.name);
//     }
// }).addTo(map)

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// create the dark tile layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Creat a map object not using SetView()
let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 4,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// accessing airport GeoJSON URL from my github
let airportData = 'https://raw.githubusercontent.com/julianadvds/mapping_earthquakes/main/majorAirports.json'

// grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with retrieved data
    L.geoJSON(data).addTo(map);
});

// Then we add our 'graymap' tile layer to the map.



