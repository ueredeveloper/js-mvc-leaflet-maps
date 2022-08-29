let center = {
  lon: -47.7161268641038,
  lat: -15.765350736556208
}
let adasa = {
  lon: -47.94141968795337,
  lat: -15.775429628899998
}
let map = L.map('map').setView(center, 10);
let Layer = L;

Layer.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

Layer.control.scale({
  imperial: true,
  metric: true
}).addTo(map);

Layer.marker(adasa).bindPopup("Adasa - Agência Reguladora de Águas").addTo(map);

export {map, Layer}