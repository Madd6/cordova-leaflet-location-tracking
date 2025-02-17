export default function TrackUser(callback) {
    navigator.geolocation.watchPosition((pos) => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude
        const userLocation = L.latLng(lat, lng)
        console.log({pos})
        callback(userLocation)
    },(error) => {
        if(error.code == 1){
            alert('please turn on your location permission')
        }else{
            alert(`Geolocation Error: ${error.message}`);
        }
    },
    { maximumAge: 0, timeout: 15000, enableHighAccuracy: true }
    )
}