// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([39.8283, -98.5795], 4.4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  //Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// // Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     color: 'red'
// }).addTo(map);

// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// L.polyline(line, {
//     color: 'yellow'
// }).addTo(map);

/* skill drill - create airline route from SFO, AUS, YYZ, JFK
blue dashed line, weight 4, opacity 0.5 light map  
*/

let line = [
    [37.6213, -122.3790], // SFO
    [30.1974,-97.6663 ],
    [43.6777,-79.6248 ], //yyz
    [40.6413,-73.7781 ] //JFK
]

L.polyline(line, {
    color: 'blue',
    weight: 4,
    opacity: 0.5,
    dashArray: '3,7'
}).addTo(map);