/* global L */
var mapOne = L.map('mapOne').setView([35.709970, 139.733128], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 18,
    minZoom: 11,
  }).addTo(mapOne);
fetch('/Users/Matthew/Google Drive/SAVI-780/Final Project/HTML Files/allfiles/NewYorkMetro.geojson')
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    L.geoJson(data).addTo(mapOne);
  });
var mapTwo = L.map('mapTwo').setView([48.853259,2.347954], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 18,
    minZoom: 11,
  }).addTo(mapTwo);

var mapThree = L.map('mapThree').setView([31.237840, 121.463265], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 18,
    minZoom: 11,
  }).addTo(mapThree);

var mapFour = L.map('mapFour').setView([40.725957, -73.975436], 12);
  // Add base layer
  L.tileLayer('https://api.mapbox.com/styles/v1/taiking/cjnaytlxt07cw2so3m61mo0lf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGFpa2luZyIsImEiOiJjamx1MzJ4NXkwZnd1M2twZWEwb281ZmtlIn0.TjccQyOx5TTdyCCZKnCTrQ',{
    maxZoom: 18,
    minZoom: 11,
  }).addTo(mapFour);
  fetch('/Users/Matthew/Google Drive/SAVI-780/Final Project/HTML Files/allfiles/NewYorkMetro.geojson')
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      L.geoJson(data).addTo(mapFour);
    });




function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onClick = function(event) {
      if (!event.target.matches('.menu')) {

          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
      }
    }
