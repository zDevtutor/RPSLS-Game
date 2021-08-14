// URL params [Rounds Number, Game Level]
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const roundsNumber = urlParams.get('roundsNumber');
const gameLevel = urlParams.get('gameLevel');

// Game Play DOM Elements
