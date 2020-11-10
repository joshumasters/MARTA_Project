var map;
let vehicleNum;
let contentString = "<h2> Vehicle#: " + vehicleNum + "</h2>";

function initMap() {
    
    let infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

    let image = {
        url:
          "/kissclipart-car-icon-bus-icon-school-bus-icon-d1b9a385b415bfc8.png",
          scaledSize: new google.maps.Size(40, 40),  
      };

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(userLocation.lat), lng: parseFloat(userLocation.lng) },
        
        zoom: 15,
        scrollwheel: false
    });
    
    var userMarker = new google.maps.Marker({
        position: { lat: parseFloat(userLocation.lat), lng: parseFloat(userLocation.lng) },
        map: map,
    });

    for (i=0; i<busLocations.length; i++){
        vehicleNum = busLocations[i].VEHICLE;

        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
            
            icon: image,
            
        });
     google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
          });   
    }
    
    console.log(vehicleNum);

    
}