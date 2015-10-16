#Description:

This is an application for the name of a memory called "Wanted: Dead or Alive."

The object of the game is to select two cards of the same famous American west outlaws/lawmen/women  consecutively with only two chances.  If two of the cards that were selected do not match, the cards will turn over and you will have to remember where each card was originally.

The player that matches their cards the fastest and clears the entire board in the fastest time is the winner

###Technologies:

html., css., javascript, jQuery


###Game Model/Design:

The model for the game utilizes an array that stores the source information for each image correlating to each card.

When two cards are chosen, a match is determined by comparing the source code of the first card selected to that of the second card.

If the source of both cards match, then the computer will determine these two cards to be a match and will remain face up.

There are 20 individual cards placed on a 4 row by 5 column board.

There is a turn for player 1, and for player 2.  

Each player is being timed, and after each player's turn, the numerical values of each players time is compared.  And the winner who completes "matching" the board in the shortest time is the winner.

###Get Started:

To play the game, sign onto the web address of the application and follow the prompts and the game will load automatically.

###Next Steps:

Problems within the application is that if you press each card to quickly, the gunshot will not always figure.  I attempted to correct this problem by including two different sound sources by importing two separate gunshot.mp3 files.  Although this did help, it did not solve the problem entirely.

Other problems include sometimes the cards turn over when clicked upon (when clicking quickly), and sometimes when the cards match, a card will turn back over even though it has matched.

Planned future features include the user being able to type in their name so that the computer stores their name as an inputvalue; and as a result, the game will be able to refer to each player by their name, and not as "Player 1" or "Player 2".


####User Story:


Wanted: Dead or Alive

The concentration memory game

As a player, I want a timer to keep track of how long it is taking me to match all the cards on the board

As a player, I want some type of Start Button to start the game

As a player, I want a some sort of notification for the start of the game

As a player i want rules/instructions to the game


###MVP's!

[x] 1.  As a player, there must be a timer that keeps track of each player's turn

[x] 2.  As a player, I would like to see a list of 10 different figures (20 cards total).

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

[X] 3.  As a player, I would like the game to switch back and forth between player 1 and player 2

[x] 4.  As a player, i would A winner to be declared between the two players

[x] 5.  As a player, the cards must shuffle and be randomized.
  

###Completed User Stories:

[x] As a user, i want to interact with a randomized deck of cards

[x] As a player, i want to be able to click on a card and the cards will turn over

[x] As a player, when I click on a second card, and if the card matches the first, two matching cards will remain showing.

[x] As a player, when I click on each card, the card will fade in and out).

[x] As a player, if the second card chosen does not match the first, then the card fades back to it's "wanted" side

[x] As a player, I want to be timed.

[x] When a second player plays, i want the time to be compared to the first player.

[x] As a player, I want to be alerted who has the fastest time

[x] As a player, I want to be notified who won and who lost.

[x] As a player, when i click on each card, there is a gunshot sound.

###Completed Tuesday, 10-14-15 

[x] As a player, i want to have an introductory page that explains what the game is and how toplay


### Completed Thursday, 10-15-15 

[x] As a player, when i click the "play again" i want the 20 cards to be reshuffled

[x] As a player, when I don't select the two same cards, the cards will turn back over.

[x] As a player, i want te identified who the winner and who the loser is based on the time it took to match the memory board


###Ongoing User Stories

[ ] As a player, i want to add text shadow to the text so that it is easier to read

[ ] Add start buttons

[ ] Play Again Button 


###Ice Box

[ ] As a player, i want to be able to enter my name so that my name will appear on the screen

























