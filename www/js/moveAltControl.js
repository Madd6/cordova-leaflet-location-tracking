export default function moveAltControl(container,btnCancel) {
    if(container.querySelector('.leaflet-routing-alternatives-container')){
    container.querySelector('.leaflet-routing-alternatives-container').remove();
    }
    const containeralternatives = document.querySelectorAll('.leaflet-routing-container.leaflet-bar.leaflet-control');
    for (let i = 0; i < containeralternatives.length; i++) {
    containeralternatives[i].style.display = "none";
    }
    container.appendChild(document.querySelector('.leaflet-routing-alternatives-container'));
    container.style.display = "block";
    btnCancel.style.display = 'flex'
}
