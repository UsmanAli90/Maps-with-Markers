let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    //pakistan lat and lan
    center: { lat: 30.375320, lng: 69.345116 },
    zoom: 8,
  });

  addMarker({lat: 31.582045,lng: 74.329376});
  addMarker({lat: 33.738045,lng: 73.084488});
  addMarker({lat: 30.032486,lng: 70.640244});
  
  function addMarker(coords){
    var marker=new google.maps.Marker({
        position:coords,
        map:map,
      })
  }


}

initMap();