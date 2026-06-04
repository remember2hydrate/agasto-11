const stores = [
    {
      lat: 49.599674, lng: 6.137444,
      name: "Au Gourmet Grec",
      address: "87 Rue de Bonnevoie<br>L-1260, Luxembourg"
    },
    {
      lat: 43.954680, lng: 2.203191,
      name: "Lakonis Produits Grecs",
      address: "11 avenue de Lescure<br>81160 Arthès (près d'Albi), France"
    },
    {
      lat: 51.523561, lng: -0.137564,
      name: "Ormos Foods",
      address: "35 Grafton Way<br>Fitzrovia, London<br>United Kingdom, W1T 5DB"
    },
    {
      lat: 38.009758, lng: 23.788523,
      name: "Mondo Biomarket",
      address: "Ιωάννου Αποστολόπουλου 59Β<br>152 31 Χαλάνδρι, Greece"
    },
    {
      lat: 50.0191216, lng: 14.447078,
      name: "Greek Market",
      address: "Novodvorská 363/33<br>142 00 Praha 12-Kamýk, Czechia"
    },
    {
      lat: 52.1169198, lng: 4.686756,
      name: "Products for Home",
      address: "Steekterweg 69<br>2407 BE Alphen aan den Rijn, Netherlands"
    },
    {
      lat: 41.08919808510261, lng: 23.54979928087503,
      name: "Mediterra",
      address: "Tsalopoulou 12<br>Serres 621 22, Greece"
    },
    {
      lat: 40.5283118, lng: 22.2047557,
      name: "Idisma",
      address: "Trempesínas 26<br>Veria 591 32, Greece"
    },
    {
      lat: 40.6357227, lng: 22.9428507,
      name: "Hatzidou Anastasia",
      address: "Vlalis 39 (Kapani Market)<br>Thessaloniki 546 24, Greece"
    },
    {
      lat: 42.6945301, lng: 23.3417762,
      name: "Milos Greek Store",
      address: "ul. \"Vasil Aprilov\" / ul. \"Oborishte\" 14<br>1504 Sofia, Bulgaria"
    },
    {
      lat: 37.6005619, lng: 26.0797828,
      name: "Melia – Handmade Natural Products",
      address: "Raches<br>83301 Ikaria, Greece"
    }
  ];

  // Initialise map centered on Europe/Mediterranean
  const map = L.map('map').setView([43, 18], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom olive-green marker icon
  const oliveIcon = L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
            <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#5a7a2e"/>
            <circle cx="14" cy="14" r="6" fill="white" opacity="0.9"/>
          </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36]
  });

  const markers = [];
  const listEl = document.getElementById('store-list');

  stores.forEach((store, i) => {
    const marker = L.marker([store.lat, store.lng], { icon: oliveIcon })
      .addTo(map)
      .bindPopup(`<strong>${store.name}</strong><br>${store.address}`);

    markers.push(marker);

    // Sidebar list item
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-action d-flex align-items-start gap-2';
    li.style.cursor = 'pointer';
    li.innerHTML = `
      <span style="color:#5a7a2e; font-size:1.1rem; margin-top:2px;">&#9679;</span>
      <div>
        <div class="fw-semibold">${store.name}</div>
        <small class="text-muted">${store.address.replace(/<br>/g, ', ')}</small>
      </div>`;
    li.addEventListener('click', () => {
      map.setView([store.lat, store.lng], 15);
      marker.openPopup();
      document.querySelectorAll('#store-list .list-group-item').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
    });
    listEl.appendChild(li);
  });
