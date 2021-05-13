// This is a JavaScript file

// This is a JavaScript file

function mostrarMapa(lat, long){
  L.mapquest.key = 'wc5KZEfZz1qUJXbvGGc0trOSKgoyeALk';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
};


$(document).on("click","#local",function(){
  var onSuccess = function(position) {
    mostrarMapa(position.coords.latitude, position.coords.longitude)
  };

  function onError(error) {
    alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
