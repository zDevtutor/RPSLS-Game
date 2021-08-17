// Create object for each option and define eachone winsover
const optionList = {
	// Rock
	rock: {
		name: 'rock',
		winsOver: ['scissors', 'lizard'],
	},
	//Paper
	paper: {
		name: 'paper',
		winsOver: ['rock', 'spock'],
	},
	//Scissors
	scissors: {
		name: 'scissors',
		winsOver: ['paper', 'lizard'],
	},
	//Lizard
	lizard: {
		name: 'lizard',
		winsOver: ['paper', 'spock'],
	},
	//Spock
	spock: {
		name: 'spock',
		winsOver: ['rock', 'scissors'],
	},
};

//Configure the level of difficulty
const levelSelect = {
	level1: [optionList.rock, optionList.paper, optionList.scissors],
	level2: [
		optionList.rock,
		optionList.paper,
		optionList.scissors,
		optionList.lizard,
	],
	level3: [
		optionList.rock,
		optionList.paper,
		optionList.scissors,
		optionList.lizard,
		optionList.spock,
	],
};
