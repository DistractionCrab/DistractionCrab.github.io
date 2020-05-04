const OPTIONS = [
	new Option('Kill {0} Ashina Generals', O([1, 2, 'all'])),
	new Option('Kill {0} Shichimen Warriors', O([1, 2, 'all'])),
	new Option('Kill {0} Headless', O([1, 2, 'all'])),
	new Option('Kill {0} Lone Shadows', O([1, 2, 3, 'all'])),
	new Option('Obtain {0}', S([
		'Lotus',
		'Shelter Stone', 
		'Aromatic Branch',
		'Frozen Tears',
		'Divine Dragon Tears',
		'Aromatic Flower'
	])),
	new Option('Find {0}', S([
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
	])),
	new Option('Find {0}', S(['Puppeteer', 'Bloodsmoke', 'Bestowal'])),
	new Option('Collect {0} Prayer necklaces', O([5, 6, 7, 8, 9, 10])),
	new Option('Collect {0} gourd seeds', O([5, 6, 7, 8, 9])),
	new Option('Do not exceed {0} Attack Power', O([1, 2, 3, 4, 5])),
	new Option('Collect both Serpent Viscera'),
	//new Option('Learn the {0} skill', []),
	new Option('Find {0} ', S([
		'Dragon Tally Board',
		'Water of the Palace',
		'Rice for Kuro'
	])),
	new Option('Possess {0} sen at some point', R(5000, 15000)),
	new Option('Find {0}', S(['Purple Gourd', 'Green Gourd', 'Red Gourd'])),
	new Option('Collect {0} carp scales', R(5, 20)),
	new Option('Ring (and keep) the Demon Bell by your second boss.'),
	new Option('Collect the {0} upgrade', S([
		'Lazulite Axe',
		'Sparking Axe',
		'Spring-load Axe',
		'Phantom Kunai',
		'Sen Throw',
		'Gouging Top',
		'Lazulite Shuriken',
		'Spinning Shuriken',
		'Spiral Spear',
		'Leaping Flame',
		'Loaded Spear Thrust Type',
		'Loaded Spear Cleave Type',
		"Phoenix's Lilac Umbrella",
		"Suzaku's Lotus Umbrella",
		'Loaded Umbrella - Magnet',
		"Okinaga's Flame Vent",
		'Lazulite Sacred Flame',
		'Spring-load Flame Vent',
		'Long Spark',
		'Sprig-load Firecracker',
		'Purple Fume Spark',
		'Lazulite Sabimaru',
		'Piercing Sabimaru',
		'Improved Sabimaru',
		'Aged Feather Mist Raven',
		'Great Feather Mist Raven',
		'Golden Vortex',
		'Double Divine Abduction',
		'Malcontent',
		'Mountain Echo'
	]))
]

function main() {
	const bingo = new Bingo(OPTIONS);
	bingo.generate();
}

document.addEventListener('DOMContentLoaded', main, false);