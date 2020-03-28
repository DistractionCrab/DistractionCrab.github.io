/*icons = document.getElementsByClassName("icon");
STATE = new Map();

for (let item of icons) {
	// Set initial state to be inactive.
	STATE.set(item, false); 
	item.style.opacity = "0.5";
}

for (let item of icons) {
	item.onclick = function() {
		if (STATE.get(item)) {
			item.style.opacity = "0.5";
		} else {
			item.style.opacity = "1.0";
		}
		STATE.set(item, !STATE.get(item))
	};
}
*/


icons = document.getElementsByClassName("icon");

class Icon {
	constructor(icon) {
		var child = icon.childNodes;
		this.cell = icon;
		this.active = child[1];
		this.inactive = child[3];
		this.is_active = false;
		this.inactive.style.display = 'block';
		this.active.style.display = 'none';
	}

	do_swap() {
		this.active.style.display = 'none';
		this.inactive.style.display = 'none';
		if (this.is_active) {
			this.is_active = false;
			this.inactive.style.display = 'block';
		} else {
			this.is_active = true;
			this.active.style.display = 'block';
		}
	}
}




for (let item of icons) {
	let icon = new Icon(item);

	//item.onclick = icon;
	item.onclick = function() { 
		icon.do_swap();
	}
}


