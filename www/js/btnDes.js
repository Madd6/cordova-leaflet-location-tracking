export default function btnDes(map , startNavigator) {
    function createButton(label, container) {
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'start-navigation-btn');
        btn.innerHTML = label;
        return btn;
    }

    map.on('click', function(e) {
        var container = L.DomUtil.create('div'),
            destBtn = createButton('Go Here', container);

        L.popup()
            .setContent(container)
            .setLatLng(e.latlng)
            .openOn(map);
        L.DomEvent.on(destBtn, 'click', function() {
            startNavigator(e.latlng)
            map.closePopup();
        });
    });
}
// create btn for chose destination