export default function createRoute(start, destination, style,UserIcon,DestinasiIcon,map) {
    let routingControl = L.Routing.control({
        waypoints: [
            L.latLng(start),
            L.latLng(destination)
        ],
        lineOptions: {
            styles: [style],
        },
        createMarker: function(i,waypoint,n){
            return i === 0
            ? L.marker(waypoint.latLng, { icon: UserIcon })
            : L.marker(waypoint.latLng, { icon: DestinasiIcon });
        },
        fitSelectedRoutes: false,
        routeWhileDragging: false,
        autoRoute: true,
        useZoomParameter: false,
        draggableWaypoints: false,
        addWaypoints: false
    }).addTo(map);

    routingControl.on('routeselected', function(e) {
        e.route.options = e.route.options || {};
        e.route.options.autoPan = false;
    });

    return routingControl
}
