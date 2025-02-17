export const CreateUserIcon = (url) => {
    return L.divIcon({
        className: "custom-marker",
        html: `
        <div>
            <img src="${url ? url : '/assets/user.png'}" alt="User Icon" alt=""/>
        </div>
        `,
        iconSize: [64, 64],
    })
};
export const CreateOtherUserIcon = (url) => {
    return L.divIcon({
        className: "custom-marker",
        html: `
        <div>
            <img src="${url ? url : '/assets/user.png'}" alt="User Icon" alt=""/>
        </div>
        `,
        iconSize: [64, 64],
    })
};
export const UserIcon = L.icon({
    iconUrl: '/assets/map-marker.png',
    iconSize: [64, 64],
});

export const OtherUserIcon = L.icon({
    iconUrl: '/assets/map-marker (1).png',
    iconSize: [64, 64],
});

export const DestinasiIcon = L.icon({
    iconUrl: '/assets/location.png',
    iconSize: [64, 64],
});

export const otherDestinasiIcon = L.icon({
    iconUrl: '/assets/location (1).png',
    iconSize: [64, 64],
});
