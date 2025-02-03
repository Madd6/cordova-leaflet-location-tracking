export default function initGeocode(map, startNavigator) {
    const geocoder = L.Control.geocoder({ 
        defaultMarkGeocode: false, 
        collapsed: false 
    }).on('markgeocode', function(e) {
        startNavigator(e.geocode.center);
    }).addTo(map);

    return geocoder;
}