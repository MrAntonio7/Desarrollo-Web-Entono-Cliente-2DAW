
if ("geolocation" in navigator) {
  document.write('geolocation is available')
} else {
  document.write('geolocation is not available')
}
var longArray = [];
var latArray = [];

function geoFindMe() {
  var output = document.getElementById("out");
  var distance = document.getElementById("distance");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    longArray.push(latitude);
    latArray.push(longitude);
    console.log(longArray);
    console.log(latArray);

    output.innerHTML =
      "<p>Latitude is " +
      latitude +
      "° <br>Longitude is " +
      longitude +
      "°</p>";

    //Para el mapita

    var img = new Image();
    img.src =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latitude +
      "," +
      longitude +
      "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);

    // Para la distancia

    function measureDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      var distLat = aRadianes(lat2 - lat1);
      var distLon = aRadianes(lon2 - lon1);
      var a =
        Math.sin(distLat / 2) * Math.sin(distLat / 2) +
        Math.cos(aRadianes(lat1)) *
          Math.cos(aRadianes(lon1)) *
          Math.sin(distLon / 2) *
          Math.sin(distLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    }

    function aRadianes(deg) {
      return deg * (Math.PI / 180);
    }

    coveredDistance = (measureDistance(latArray[0], longArray[0], latArray[latArray.length - 1], longArray[longArray.length - 1]));
    distance.innerHTML = "<p> <h4>La distancia recorrida desde el punto inicial es de: " + coveredDistance + "</h4></p>";
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

setInterval(geoFindMe, 2000);
