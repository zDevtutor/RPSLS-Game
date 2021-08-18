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
function getUrlParams() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const gameOptions = {
		roundsNumber: urlParams.get('roundsNumber'),
		gameLevel: urlParams.get('gameLevel'),
	};

	return gameOptions;
}

// Validate URL params
function validateUrlParams() {
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
}

validateUrlParams();

function playGame(level, rounds) {
	// Cashing game DOM elements
	const gameRounds = document.getElementById('rounds');
	const playerScoreDOM = document.getElementById('player-score');
	const computerScoreDOM = document.getElementById('computer-score');
	const computerHand = document.getElementById('computer-hand');
	const playerHand = document.getElementById('player-hand');
	const gamePlay = document.getElementById('game-play');
	const scoreResults = document.getElementById('score-results');

	let playerScore = 0;
	let computerScore = 0;

	// Update Game rounds
	gameRounds.innerHTML = rounds;

	// Create user options
	const options = levelSelect[level];
	const userOptions = document.createElement('div');
	userOptions.className = 'row';

	const userOptionsCol = document.createElement('div');
	userOptionsCol.className = 'col';
	userOptions.appendChild(userOptionsCol);

	// Create userOptions section depending on level select
	options.forEach(option => {
		const optionImg = document.createElement('img');
		optionImg.src = `assets/img/${option.name}.png`;
		optionImg.alt = `${option.name}`;
		optionImg.width = 80;
		optionImg.className = 'btn';

		userOptionsCol.appendChild(optionImg);

		optionImg.addEventListener('click', e => {
			const computerRandomNumber = Math.floor(Math.random() * options.length);
			const computerChoice = options[computerRandomNumber];
			const userChoice = e.target.alt;

			// Update Images on choices
			computerHand.src = `assets/img/${computerChoice.name}.png`;
			playerHand.src = `assets/img/${userChoice}.png`;
			compareHands(userChoice, computerChoice);
		});
	});

	gamePlay.appendChild(userOptions);

	function compareHands(playerChoice, computerChoice) {
		// Update Outcome
		if (playerChoice === computerChoice.name) {
			scoreResults.innerText = "It's A Draw!";
		} else if (computerChoice.winsOver.includes(playerChoice)) {
			scoreResults.innerText = 'Computer Wins!';
			computerScore++;
			updateScore();
		} else {
			scoreResults.innerText = 'Player Wins!';
			playerScore++;
			updateScore();
		}

		// Finish game and display results
		checkForGameOver();
		return;
	}

	// Update Player and Computer scores
	function updateScore() {
		playerScoreDOM.innerText = playerScore;
		computerScoreDOM.innerText = computerScore;
	}

	// Check if Game is over
	function checkForGameOver() {
		if (playerScore.toString() === rounds) {
			alert('Congratulations! You Win');

			// Save to local storage
			localStorage.setItem(
				'userWins',
				Number(localStorage.getItem('userWins')) + 1
			);

			// Get redirect to homepage
			window.location.href = './';
		} else if (computerScore.toString() === rounds) {
			alert("BadLuck, You've Lost. Try Again!");
			localStorage.setItem(
				'userLost',
				Number(localStorage.getItem('userLost')) + 1
			);

			window.location.href = './';
		}
		return;
	}
}
