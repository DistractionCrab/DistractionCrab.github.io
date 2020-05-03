const INACTIVE = 'bingo-inactive';
const ACTIVE = 'bingo-active';

class Select {
	constructor(items) {
		this.items = items;
	}

	count() {
		return this.items.length;
	}

	select() {
		var index = Math.random() * this.items.length;
		return this.items[Math.floor(index)];
	}
}

class Range {
	constructor(min, max) {
		this.min = min;
		this.max = max;
	}

	count() {
		return 1;
	}

	select() {
		var value = Math.random();
		value = this.min + value * (this.max - this.min + 1);
		return Math.floor(value);
	}
}

function S(items) { return new Select(items); }
function R(min, max) { return new Range(min, max); }

class Option {
	constructor(desc) {
		this.desc = desc;
		this.options = [...arguments].slice(1);
	}

	count() {
		if (this.options.length > 0) {
			var m = 1;
			for (var k = 0; k < this.options.length; ++k) {
				m *= this.options[k].count();
			}
			return m;
		} else {
			return 1;
		}
	}

	select() {
		if (this.options.length > 0) {
			// TODO: Need to implement multiple selects.
			return this.desc.replace('{0}', this.options[0].select())
		} else {
			return this.desc;
		}
	}
}

function randInt(i) {
	return Math.floor(Math.random() * i);
}


class Bingo {
	constructor(options) {
		this.options = options;
		this.add_listeners();
	}

	generate() {
		var choices = [];
		var counts  = new Array(OPTIONS.length).fill(0);
		const table = document.getElementById('bingo-table');

		for (var i = 0; i < 5; ++i) {
			const row = table.rows[i];
			for (var k = 0; k < 5; ++k) {
				var filled = false;
				const col = row.cells[k];
				while (!filled) {
					const c = randInt(OPTIONS.length);
					if (counts[c] < OPTIONS[c].count()) {
						counts[c] += 1;
						col.innerHTML = OPTIONS[c].select();
						filled = true;
					}
				}
			}
		}
	}

	add_listeners() {
		const table = document.getElementById('bingo-table');

		for (var i = 0; i < 5; ++i) {
			const row = table.rows[i];
			for (var k = 0; k < 5; ++k) {
				const col = row.cells[k];
				col.onclick = function(event) {
					const elem = event.target;
					if (elem.className.includes(INACTIVE)) {
						const newClass = elem.className.replace(INACTIVE, ACTIVE);
						elem.className = newClass;
						elem.style.backgroundColor = 'green';
					} else if (elem.className.includes(ACTIVE)){
						const newClass = elem.className.replace(ACTIVE, INACTIVE);
						elem.className = newClass;
						elem.style.backgroundColor = 'black';
					} else {
						elem.className += ' ' + ACTIVE;
						elem.style.backgroundColor = 'green';
					}
				};
			}
		}	
	}
}

