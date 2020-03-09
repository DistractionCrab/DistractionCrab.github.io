icons = document.getElementsByClassName("icon");
STATE = new Map();

for (let item of icons) {
	// Set initial state to be inactive.
	STATE.set(item, false); 
	item.style.opacity = "0.3";
}

for (let item of icons) {
	item.onclick = function() {
		if (STATE.get(item)) {
			item.style.opacity = "0.3";
		} else {
			item.style.opacity = "1.0";
		}
		STATE.set(item, !STATE.get(item))
	};
}