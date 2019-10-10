let platform = new H.service.Platform({
    'app_id': 'SYdp1Y4JH9YKshr5OoEa',
    'app_code': '1438E1rmSGDVzyaxisFUXg'
  });


function landmarkGeocode(){
    let title = document.querySelector('h1').textContent;
    let  geocoder = platform.getGeocodingService(),
    landmarkGeocodingParameters = {
        searchText: title,
        jsonattributes: 1
    };
    geocoder.search(
        landmarkGeocodingParameters,
       showMap,
       (e) => console.log(e)
    );
}
function showMap(result){

    let location = {}

    if(result) {
      if(result.response.view) {
        let view = result.response.view[0]
        if(view.result) {
          let result = view.result[0]
          if(result.location) {
             location = result.location.displayPosition
          } else if(result.place) {
             if(result.place.locations) {
              location = result.place.locations[0].displayPosition
             }
              
          }
        }
      }
    }


    //let location = result.response.view[0].result[0].location.displayPosition
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.normal.map,
        {
          zoom: 15,
          center: { lat: location.latitude, lng: location.longitude }
        });

        let marker = new H.map.Marker({ lat: location.latitude, lng: location.longitude});
        map.addObject(marker);
        let ui = H.ui.UI.createDefault(map, defaultLayers);
}
landmarkGeocode();