import {UserIcon, CreateUserIcon} from './module/ModuleIcon.js'
export default function markerMove(marker, userLocation, map) {
    let userIdentity
    let userIdentityParsed
    if(localStorage.getItem('userIdentity')){
        userIdentity = localStorage.getItem('userIdentity')
        userIdentityParsed = JSON.parse(userIdentity);
    }
    if (!marker) {
        marker = L.marker([userLocation.lat, userLocation.lng], { icon: CreateUserIcon(userIdentityParsed.userimg) }).addTo(map);
    } else {
        marker.setLatLng([userLocation.lat, userLocation.lng], {
            smooth: true,
            duration: 1000
        });
    }
    return marker;
}