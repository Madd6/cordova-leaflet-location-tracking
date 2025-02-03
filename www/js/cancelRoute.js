export default function cancelRoute(container,btnCancel,btnFlyTo,userMarker){
    container.style.display = "none";
    container.classList.remove('expanded')
    btnCancel.style.display = 'none'
    btnCancel.classList.remove('expanded')
    btnFlyTo.classList.remove('expanded')
    userMarker.closePopup();
    userMarker.unbindPopup();
}