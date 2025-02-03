import {UserIcon} from './module/ModuleIcon.js'
export default function markerMove(marker, userLocation, map) {
    if (!marker) {
        marker = L.marker([userLocation.lat, userLocation.lng], { icon: UserIcon }).addTo(map);
    } else {
        marker.setLatLng([userLocation.lat, userLocation.lng], {
            smooth: true,
            duration: 1000
        });
    }
    return marker;
}