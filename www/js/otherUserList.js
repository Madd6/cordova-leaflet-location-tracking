export default function otherUserList(containerSelector, data, setShowOtherUserRoute,map) {
    const { location, userInfo , id } = data;
    const containerListOther = document.querySelector(containerSelector);
    let listOther = document.getElementById(`otherUser-${id}`);

    if (!listOther) {
        listOther = document.createElement("div");
        listOther.id = `otherUser-${id}`;
        listOther.className = "listOther-item"; 
        listOther.innerHTML = `
            <div style="width:40px;height:40px;border-radius:100%;overflow:hidden">
                <img src="${userInfo.userimg}" alt="" 
                style="width: 100%;object-fit: cover;aspect-ratio: 1/1;border-radius: 100%;"/>
            </div>
            <h3>${userInfo.username}</h3>
            <button>
                <img src="assets/send-mail.png" alt="" style="width: 80%;">
            </button>
        `;

        containerListOther.appendChild(listOther); 
        listOther.querySelector("button").addEventListener("click", () => {
            setShowOtherUserRoute(data)
            map.setView(L.latLng(location.lat, location.lng), 17)
        });

        
    } else {
        listOther.querySelector("button").innerHTML = `
            <img src="assets/send-mail.png" alt="" style="width: 80%;">
        `;
    }

    
}