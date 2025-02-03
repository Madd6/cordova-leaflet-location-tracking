export default function otherUserList(containerSelector, data, setShowOtherUserRoute,map) {
    const { location, id } = data;
    const containerListOther = document.querySelector(containerSelector);
    let listOther = document.getElementById(`otherUser-${id}`);

    if (!listOther) {
        listOther = document.createElement("div");
        listOther.id = `otherUser-${id}`;
        listOther.className = "listOther-item"; 
        listOther.innerHTML = `
            <h3>user${id}</h3>
            <button>
                <img src="assets/send-mail.png" alt="" style="width: 80%;">
            </button>
        `;

        containerListOther.appendChild(listOther); 
        listOther.querySelector("button").addEventListener("click", () => {
            setShowOtherUserRoute(id,location)
            map.setView(L.latLng(location.lat, location.lng), 17)
        });

        
    } else {
        listOther.querySelector("button").innerHTML = `
            <img src="assets/send-mail.png" alt="" style="width: 80%;">
        `;
    }

    
}