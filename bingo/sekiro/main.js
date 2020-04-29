class Select {
	constructor(items) {
		this.items = items;
	}
}

class Range {
	constructor(min, max) {
		this.min = min;
		this.max = max;
	}
}

function S(items) { return new Select(items); }
function R(min, max) { return new Range(min, max); }

class Option {
	constructor(desc) {
		this.desc = desc;
		this.options = [...arguments].slice(1);
		console.log(this.options);
	}
}

OPTIONS = [
	new Option('Kill {0} Ashina Generals', [1, 2, 'all']),
	new Option('Kill {0} Shichimen Warriors' [1, 2, 'all']),
	new Option('Kill {0} Headless', [1, 2 'all']),
	new Option('Find {0}', [
		'Shuriken',
		'Flame Vent',
		'Firecrackers',
		'Shinobi Axe',
		'Mist Raven',
		'Loaded Spear',
		'Sabimaru',
		'Loaded Umbrella',
		'Divine Abduction',
		'Finger Whistle'
	]),
	new Option('Find {0}', ['Puppeteer', 'Bloodsmoke', 'Bestowal']),
	new Option('Collect {0} Prayer necklaces', [5, 6, 7, 8, 9, 10]),
	new Option('Collect {0} gourd seeds', [5, 6, 7, 8, 9]),
	new Option('Do not except {0} Attack Power', [1, 2, 3, 4, 5]),
	new Option('Collect both Serpent Viscera'),
	//new Option('Learn the {0} skill', []),
	new Option('Find {0} ', [
		'Dragon Tally Board',
		'Water of the Palace',
	]),
	//new Option('Collect the {0} tool upgrade', []),
	new Option('Possess {0} sen at some point', R(5000, 15000)),
	new Option('Find {0}', S(['Purple Gourd', 'Green Gourd', 'Red Gourd'])),
	new Option('Collect {0} carp scales', R(5, 20)),
	new Option('Ring (and keep) the Demon Bell by your second boss.')
]
