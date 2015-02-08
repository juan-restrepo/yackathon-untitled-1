'use strict';

var internals = {};

var geocoder;
var map;

internals.initialize = function(domMountPoint) {
  var latlng = new google.maps.LatLng(-73.567256, 45.501689);
  var mapOptions = {
    zoom: 14,
    center: latlng,
    disableDefaultUI: true,
    zoomControl: true
  };
  map = new google.maps.Map(domMountPoint, mapOptions);
};

internals.codeAddress = function(search, callback) {
  if (!geocoder) geocoder = new google.maps.Geocoder();

  geocoder.geocode({address: search}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
      callback(null, results[0].geometry.location);
    } else {
      callback(status);
    }
  });
};

internals.centerAndAddMarker = function(location) {
  if (!map) return;
  map.setCenter(location);
  var marker = new google.maps.Marker({
    map: map,
    position: location
  });
  return marker;
};

module.exports = internals;
