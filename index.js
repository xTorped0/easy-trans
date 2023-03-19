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

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
		observer.unobserve(entry.target)
  });
};

const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const elements = document.querySelectorAll('.title');
elements.forEach(el => {
	const observer = new IntersectionObserver(startAnimation);
  observer.observe(el, options);
});

(function carousel(){
	const items = document.querySelectorAll('.gallery img');
	const indicators = document.querySelectorAll('.gallery .items .item');
	const buttons = document.querySelectorAll('.gallery .controllers button')

	buttons.forEach((btn, ind) => {
		btn.onclick = () => {
			items.forEach((item) => {
				item.toggleAttribute('current')
			}) 
			indicators.forEach((item) => {
				item.classList.toggle("current");
			}) 
		}
	})
})()