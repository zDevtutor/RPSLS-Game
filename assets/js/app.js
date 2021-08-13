const usp = new URLSearchParams(window.location.search);

const roundsNumber = usp.get('roundsNumber');
const gameLevel = usp.get('gameLevel');

const rounds = document.getElementById('rounds');

rounds.innerHTML = roundsNumber;
