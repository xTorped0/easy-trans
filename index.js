let map = L.map('map', { scrollWheelZoom: false, center: [50.4101, 30.5234], zoom: 6.4 });

const tile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


L.geoJSON(poly.geometries, {
	weight: 1,
	fillOpacity: 0.3,
	color: '#fead15',
	dashArray: '3'
}).addTo(map);

L.geoJSON(polyobl.geometries, {
	weight: 2,
	fillOpacity: 0,
	color: '#fead15',
	dashArray: '3'
}).addTo(map);