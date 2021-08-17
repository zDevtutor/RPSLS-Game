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

// Get URL params(RoundNumber, GameLevel)
const getUrlParams = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const gameOptions = {
		roundsNumber: urlParams.get('roundsNumber'),
		gameLevel: urlParams.get('gameLevel'),
	};

	return gameOptions;
};

// Validate URL params
const validateUrlParams = () => {
	const urlParams = getUrlParams();

	const validLevels = Object.keys(levelSelect);

	if (
		validLevels.includes(urlParams.gameLevel) &&
		urlParams.roundsNumber > 0 &&
		urlParams.roundsNumber <= 10
	) {
		playGame(urlParams.gameLevel, urlParams.roundsNumber);
	} else {
		window.location.href = './';
	}
};

validateUrlParams();
