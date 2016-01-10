
#![](http://i.imgur.com/PN5dMnA.jpg)

#Wanted: Dead or Alive

---

### The Product:

Wanted: Dead or alive a two-player memory game that involves the matching of the most famous lawmen/outlaws in the history of the American West.

- [Click here to play Wanted: Dead or Alive](http://ansel291.github.io/Project_1/)

The object of the game is to select two cards of the same famous American west outlaws/lawmen/women  consecutively with only two chances.  If two of the cards that were selected do not match, the cards will turn over and you will have to remember where each card was originally.

The player that matches their cards the fastest and clears the entire board in the fastest time is the winner.

---

### Created By:

**Name** | **GitHub** | **Email** 
---------| ---------- | ---------
Jason **Asahara** | [GitHub](https://github.com/Ansel291) | [jasahara@yahoo.com](jasahara@yahoo.com)

###Game Model/Design:

![](http://i.imgur.com/BuHNExf.jpg) 

The model for the game utilizes an array that stores the source information for each image correlating to each card.  When two cards are chosen, a match is determined by comparing the source code of the first card selected to that of the second card.  If the source of both cards match, then the computer will determine these two cards to be a match and will remain face up.

There are 20 individual cards placed on a 4 row by 5 column board.
Also, there is a turn for player 1, and turn for player 2.  Each player is being timed, and after each player's turn, the numerical values of each players time is compared.  And the winner who completes "matching" the board in the shortest time is the winner.

---


### Technologies Used:


Communication | Collaboration | Design | Development | APIs | Deployment
----| ---| --- | --- | --- | ---
 [Standup meetings](https://en.wikipedia.org/wiki/Stand-up_meeting)| | | [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)| | [Git-Hub Pages](http://heroku.com/)
 [Slack](https://slack.com/) | |  | [CSS3](http://www.w3schools.com/css/) |  | 
 [Markdown](https://guides.github.com/features/mastering-markdown/)|  |  | [Bootstrap](http://getbootstrap.com/) | |
 |  | | [JavaScript/jQuery](https://www.javascript.com/) | 
 |  | | [GitHub](https://github.com/) |
 |  | | [Sublime](http://www.sublimetext.com/) |

---

###Installations Required:

To play the game, sign onto the web address of the application and follow the prompts and the game will load automatically with no installation required.

---

### Wireframe/ERD:
![](http://i.imgur.com/RQVApb1.png) 
![](http://i.imgur.com/EFK0Bna.png)
![](http://i.imgur.com/FY7Ha1U.png)

---

####User Stories:


Wanted: Dead or Alive

The concentration memory game

As a player, I want a timer to keep track of how long it is taking me to match all the cards on the board.

As a player, I want some type of Start Button to start the game

As a player, I want some sort of notification for the start of the game.

As a player i want rules/instructions to the game.

---

###Milestones/User Stories Accomplished:

[x] As a player, there must be a timer that keeps track of each player's turn

[x] As a player, I would like to see a list of 10 different figures (20 cards total).

	* Doc Holiday
	* Wyatt Earp
	* Madame Mustache
	* Billy the Kid
	* Bat Masterson
	* Bonnie and Clyde
	* Josephine
	* Jesse James
	* Buffalo Bill
	* Butch Cassidy

[X] As a player, I would like the game to switch back and forth between player 1 and player 2.

[x] As a player, i would A winner to be declared between the two players.

[x] As a player, the cards must shuffle and be randomized.

[x] As a user, i want to interact with a randomized deck of cards.

[x] As a player, i want to be able to click on a card and the cards will turn over.

[x] As a player, when I click on a second card, and if the card matches the first, two matching cards will remain showing.

[x] As a player, when I click on each card, the card will fade in and out).

[x] As a player, if the second card chosen does not match the first, then the card fades back to it's "wanted" side

[x] As a player, I want to be timed.

[x] When a second player plays, i want the time to be compared to the first player.

[x] As a player, I want to be alerted who has the fastest time

[x] As a player, I want to be notified who won and who lost.

[x] As a player, when i click on each card, there is a gunshot sound.

[x] As a player, i want to have an introductory page that explains what the game is and how to play.

[x] As a player, when i click the "play again" i want the 20 cards to be reshuffled.

[x] As a player, when I don't select the two same cards, the cards will turn back over.

[x] As a player, i want identified who the winner is and who the loser is based on the time fastest taken to match the memory board.

---

###Upcoming Features:

[ ] As a player, I want to be notified as to when each round starts

[ ] As a players, I want to press a "Play Again" button so that I can replay the game. 

[ ] As a player, i want to be able to enter my name so that my name will appear on the screen

---

###Unsolved Problems/Major Hurdles:

One of the major problems within the application is that if you press each card too quickly, the noise of the gunshot will not always fire on time.  I attempted to correct this problem by including two different sound sources by importing two separate gunshot.mp3 files.  Although this did help, it did not solve the problem entirely.

Other problems include sometimes the cards turn over when clicked upon (when clicking quickly), and sometimes when the cards match, a card will turn back over even though it has matched.

Planned future features include the user being able to type in their name so that the computer stores their name as an inputvalue; and as a result, the game will be able to refer to each player by their name, and not as "Player 1" or "Player 2".

---

###Note:

For future references, when making updates from local server to production mode,
must switch from "master branch" to "gh-pages"

























