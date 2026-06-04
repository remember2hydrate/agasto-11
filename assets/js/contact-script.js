const map = L.map('mini-map', { zoomControl: true, scrollWheelZoom: false })
.setView([37.7180, 26.8350], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

const oliveIcon = L.divIcon({
className: '',
html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#5a7a2e"/>
        <circle cx="14" cy="14" r="6" fill="white" opacity="0.9"/>
        </svg>`,
iconSize: [28, 36], iconAnchor: [14, 36], popupAnchor: [0, -36]
});

L.marker([37.7180, 26.8350], { icon: oliveIcon })
.addTo(map)
.bindPopup('<strong>agasto</strong><br>Agia Aikaterini, Koumaika<br>Samos 831 04, Greece')
.openPopup();

// Send button – demo feedback (wire up to your backend/Formspree/etc.)
document.getElementById('btn-send').addEventListener('click', () => {
const name  = document.getElementById('inp-name').value.trim();
const email = document.getElementById('inp-email').value.trim();
const msg   = document.getElementById('inp-msg').value.trim();
if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
}
// TODO: replace with fetch() to your form endpoint
document.getElementById('success-banner').classList.add('show');
document.getElementById('inp-name').value  = '';
document.getElementById('inp-email').value = '';
document.getElementById('inp-msg').value   = '';
});
