export default function initMap(idContainer) {
    return new Promise((resolve, reject) => {
        try {
            var map = L.map(idContainer, { scrollWheelZoom: true, zoomControl: false })
                .setView([-7.556775962951118, 112.23341255658768], 17); //[lat,lng],zoomLevel

            L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }).addTo(map);

            map.whenReady(() => resolve(map));

        } catch (error) {
            reject(error);
        }
    })
}