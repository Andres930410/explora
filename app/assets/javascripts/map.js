var map;
function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 4.638344, lng: -74.084057},
        zoom: 15
      });
      var texts = []
      var markers = []

      $.get("/buildings", function(data, status){
        var infowindow = new google.maps.InfoWindow();

        for (i = 0; i < data.length; i++) {
          var k = parseFloat(data[i].lat);
          var k1 = parseFloat(data[i].lng);
          texts[i] = '<h4>Name: </h4>' + data[i].name +
            '<h4>Number: </h4>' + parseInt(data[i].number);

          markers[i] = new google.maps.Marker({
        		map: map,
        		position: {lat: k, lng: k1},
            title: data[i].name,
          });

          google.maps.event.addListener(markers[i], 'click', (function(marker, i) {
      			return function() {
      				infowindow.setContent(texts[i]) ;
      				infowindow.open(map, markers[i]);
      			}
      		}) (markers[i], i));

        }
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      });
}
