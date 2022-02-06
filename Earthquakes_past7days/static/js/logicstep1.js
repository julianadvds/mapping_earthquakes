// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a centre and zoom level using SetView
// let map = L.map('mapid').setView([30, 30], 2);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// create the satellite tile layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    'Streets': streets,
    'Satellite': satelliteStreets
};

// Creat a map object not using SetView()
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// pass our map layers into our co ntrol and add the layer control to map
L.control.layers(baseMaps).addTo(map);

// accessing toronto data from github
let earthquake = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// create a style for the lines
let myStyle = {
    color: 'blue',
    weight: 1,
    fillColor: 'yellow'
}

// grabbing our GeoJSON data
d3.json(earthquake).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with retrieved data
    L.geoJSON(data).addTo(map);
});

// Then we add our 'graymap' tile layer to the map.



