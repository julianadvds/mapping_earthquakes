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

// create the dark tile layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    Streets: streets,
    'Satellite Streets': satelliteStreets
};

// Creat a map object not using SetView()
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// accessing toronto data from github
let torontoHoods = 'https://raw.githubusercontent.com/julianadvds/mapping_earthquakes/main/torontoNeighborhoods.json'

// create a style for the lines
let myStyle = {
    color: 'blue',
    weight: 1,
    fillColor: 'yellow'
}

// grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with retrieved data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature : function(feature, layer){
            layer.bindPopup('<h3>Neighbourhood: ' + feature.properties.AREA_NAME+ "</h3>")
        }
        
    })
    .addTo(map);
});

// Then we add our 'graymap' tile layer to the map.



