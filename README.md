# ROCK, PAPER, SCISSORS, LIZARD, SPOCK

A simple JavaScript game of Rock, Paper, Scissors, Lizard, and Spock where you are able to play against the computer and select between these five options to compare your selection against the computer selection and decide the winner. The game has a twist where you can select the level of difficulty of 3 levels and the number of rounds you would like to play against the computer. All the scores are saved where you can access them at any time.

![Final Product Screenshot - Hompage](/assets/img/screenshots/RPSLS_Screenshot-1.png)

![Final Product Screenshot - Game area](/assets/img/screenshots/RPSLS_Screenshot-2.png)

## User Experience

### User Stories

**As a site user, I want to be able to:**

- To play the rock, paper, scissors, lizard and spock game with ease. I want to be able to decide number of rounds to be played. To challange the computer by selecting level of diffculity which decides number of options be selected from.

## Design

The game was designed to be simple, modern, intuitive and to provide a good user experience by making the game easy to play and enjoyable.

### Color Scheme

The colors used for making the prject:

- Primary color which is **#512d6d**
- Dark color which is **#283149**
- Light color which is **#eeeeee**
- Play color which is **#f8485e**
- Hover color which is **#00c1d4**

### Typography

- The Header font is Luckiest Guy
- The website content font is Roboto

### Wireframes

![Final Product Screenshot - Game area](/wireframes/RPSLS-Wireframe.png)

## Features

### The game rules

The aim of the game is to play **Rock, Paper, Scissors, Lizard, and Spock** against the computer and to win as many rounds as you want. The game will end after you win or lose against the computer for the specified rounds.

The rules of the game is very simple. You're able to check it through this [detailed guidline](https://www.wikihow.com/Play-Rock-Paper-Scissors-Lizard-Spock)

### How To Play

- Enter the number of rounds you would like to play
- Choose the game Level
  - Level1: Game, Paper, Scissors
  - Level2: Game, Paper, Scissors, Lizard
  - Level3: Game, Paper, Scissors, Lizard, Spock
- Press **Let's Play** button to start the game
- Once the game starts, you will be presented with the available options for this level, select one of the available options
- The computer will choose its option against yours and the first to achieve the specified rounds will win the game.
- You have the **Back** button if you would like to quit the game at any given time and get back to the home area.
- Once you win the game. You will have the option to save your score and it will be available under the scoreboard section

---

### Hompage

#### How to Play?

![How to play button](/assets/img/screenshots/How-to-play-btn.png)
![How to play popup](/assets/img/screenshots/How-to-play-popup.png)

By clicking on the how-to-play button there will be a popup with all the game rules and instuctions.

#### Scoreboard

![Scoreboard button](/assets/img/screenshots/Scoreboard-btn.png)
![How to play popup](/assets/img/screenshots/Scoreboard-popup.png)

By clicking on the scoreboard button there will be a popup with all the wins and losses presented in a table and with the ablility to clear the score by clicking the **clear Scores** button

#### Game Form

![Game Area](/assets/img/screenshots/Game-Form.png)

Through this form you'll be able to enter number of rounds to be played as well as selecting level of diffculty.

---

### Game Area

![Game Area](/assets/img/screenshots/Game-Area.png)

Here the user is able to select between different options and the player score as well as the computer score gots updated to show the winner and the loser of the round. After reaching the number of rounds detected there will be an alert with a message detecting if the user wins or lost. The user is able to get back to the homepage at any given time by clicking on the back button.

---

## Testing

There were some errors in the HTML files that related to duplicated id values, using of aria-describeby where it doens't point to anything in the page and lastly not having the first option with an empty value. No Errors were found in the Javascript file as well as the CSS file. As a result All code pass the official validators without issues.

### Validator Testing

- **HTML**
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frpsls-game.vercel.app%2Findex.html)
    ![HTML Validation](/assets/img/screenshots/HTML-Validation.png)
- **CSS**
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
    ![CSS Validation](/assets/img/screenshots/CSS-Validation.png)
- **JavaScript**
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    The following metrics were returned:
    - There are 8 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 0.5.
    - Largest function has 21 statements in it, while the median is 6.5.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 1.

#### Unfixed Bugs

- It's not a bug. It's just the HTML validation warning of not using heading tags within the container section. It's recommended to use heading tags within section tags but since it's not needed in the project markup I didn't use it.

## Deployment

The site was deployed to Vercel. The steps to deploy are as follows:

- Create a new GitHub repository with a project name of "RPSLS-Game".
- Push your project to the GitHub repository.
- Open the Vercel website and login (Signup if you don't have an account)
- Create a new project and import the Git repository.

The live link can be found here - https://rpsls-game.vercel.app/

## Credits

### Content

- Fonts used are from [google fonts](https://fonts.google.com/)
- Instructions on game rules and how to play the game are from https://www.wikihow.com/Play-Rock-Paper-Scissors-Lizard-Spock

### Media

- All of the images were taken from [pngwing](https://www.pngwing.com/)
