export default function hitungJarak(startPoint , destination,marker ,routingControl,map,hasrouting,socket) {
    return new Promise((resolve, reject) => {
        let myRoute = L.Routing.osrmv1();
        console.log({startPoint},{destination})
        startPoint = new L.Routing.Waypoint(L.latLng(startPoint.lat, startPoint.lng))
        destination = new L.Routing.Waypoint(L.latLng(destination.lat, destination.lng))
        myRoute.route([startPoint,destination],(err, routes) => {
            if(err) reject(err);
            const jarakTujuan = (routes[0].summary.totalDistance / 1000).toFixed(2);
            const estimasiWaktu = (routes[0].summary.totalTime / 60).toFixed(1); 
            if (marker) {
                marker.bindPopup(`Jarak ke tujuan: ${jarakTujuan || 'Menghitung...'} km <br> Estimasi Waktu ke tujuan: ${estimasiWaktu || 'Menghitung...'} Min`, {
                    autoPan: false
                }).openPopup();
            }
            if(destination && jarakTujuan >= 0 && jarakTujuan < 0.005){
                map.removeControl(routingControl);
                routingControl = null;
                destination = null;
                marker.bindPopup('You have reached your destination!', {
                    autoPan: false
                }).openPopup();
                setTimeout(() => {
                    marker.closePopup();
                    marker.unbindPopup();
                }, 3000);
                hasrouting = false;
                socket.emit('stopTracking')
            }
            resolve(marker)

        })
    })
}