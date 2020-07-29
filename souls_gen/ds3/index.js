const GOALS = [
	'Soul of Cinder',
	'Yhorm with Siegeward',
	'Aldrich with Anri',
	'Champion Gundyr',
	'Nameless King',
	'Gael',
	'Frieda',
	'Halflight with Patches',
];

const OBJECTIVES = [
	'Defeat the Livid Pyromancer, Dunnel',
	'Defeat the Pale Shade of Londor',
	'Defeat Leohnard at Anor Londo',
	'Defeat the Sword Master before leaving Firelink',
	'Defeat the three Winged Knights atop Archives',
	'Defeat the Quakestone Millwood Knight',
	'Defeat the Red-eyed Greataxe Millwood Knight',
	'Defeat both Deep Accursed.',
	"Defeat all three of Pontiff's Beasts",
	'Defeat Tsorig before Crystal Sage',
	'Defeat Knight Hodric with Sirris',
	'Defeat Heysel twice',
	'Defeat the Three Outrider Knights',
	'Defeat Alva in the Ringed City',
	'Defeat Silver Knight Ledo',
	'Defeat all three Judicators in the Ringed City',
	'Defeat all four Demon Shaman',
	'Defeat the Dark Wraith in Highwall before fighting Abyss Watchers',
	'Defeat all Ember Crabs',
	'Defeat all three non-boss Demons before defeating Deacons',
	'Defeat Hawkwood at Farron',
	'Defeat Horace',
	'Obtain Spotted Whip',
	'Defeat All Elder Ghru before Abyss Watchers',
	"Obtain Yorshka's Spear",
	'Defeat the Jailed Lycanthrope in the dungeon',
	'Defeat Small Hat Logan',
	'Defeat all four Monstrosities of Sin',
	'Defeat Havel',
	'Defeat the Mini-Wyvern in Archdragon Peak',
	'Obtain Greatshield of Glory',
	'Defeat the two hollows on the way to Cathedral on your first trip',
	'Join the Mound-makers',
	'Defeat all Fire Witches in Irithyl',
	'Defeat the mad Smouldering Tree Woman (Guards Snap Freeze)',
	'Defeat the three Ice Crabs',
	'Defeat all three angels in the Earthen Peak',
	'Defeat the Pyromancer in the Earthen Peak',
	'Defeat all Ravenous Crystal Lizards',
];

const CONSTRAINTS = [
	'Daggers',
	'Straight Swords',
	'GreatSwords',
	'Ultra Greatswords',
	'Curved Swords',
	'Katanas',
	'Curved Greatswords',
	'Piercing Swords',
	'Axes',
	'Greataxes',
	'Hammers',
	'Great Hammers',
	'Fist or Claws',
	'Spears and Pikes',
	'Halberds',
	'Reapers',
	'Sorceries',
	'Miracles',
	'Pyromancies',
]

function choose_n(l, n) {
	const choices = [];
	while (choices.length < n) {
		const index = Math.floor(Math.random() * l.length);
		if (!choices.includes(l[index])) {
			choices.push(l[index]);
		}
	}
	return choices;
}

function generate() {
	const goal_html = document.getElementById('goal');
	const objs_html = document.getElementById('objectives');
	const builds_html = document.getElementById('constraints');
	goal_html.innerHTML = '';
	objs_html.innerHTML = '';
	builds_html.innerHTML = '';


	const goal = choose_n(GOALS, 1);
	const objs = choose_n(OBJECTIVES, 3);
	const build = choose_n(CONSTRAINTS, 2);

	// Set the goal:
	goal_html.innerHTML = goal[0];

	// Set the objectives.
	for (var i = 0; i < objs.length; ++i) {
		const entry = document.createElement('li');
		entry.appendChild(document.createTextNode(objs[i]));
		objs_html.appendChild(entry);
	}

	// Set the objectives.
	for (var i = 0; i < build.length; ++i) {
		const entry = document.createElement('li');
		entry.appendChild(document.createTextNode(build[i]));
		builds_html.appendChild(entry);
	}
}