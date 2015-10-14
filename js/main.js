console.log("active!")


// // Variables


var firstchoice;
var secondchoice;
var tid;
var turns = 0;
var cntr = 0;
var player = 1;
var score = 0;
var backcard = "img/wanted.jpg";
var isFirstCard = true;




//Array of Names

var faces = new Array(
 
 'img/docHollidayA.jpg', 
 'img/docHollidayA.jpg',
 'img/billyTheKidA.jpg', 
 'img/billyTheKidA.jpg', 
 'img/wyattEarpA.jpg', 
 'img/wyattEarpA.jpg', 
 'img/josephineA.jpg',
 'img/josephineA.jpg',
 'img/bonnieAndClydeA.jpg',
 'img/bonnieAndClydeA.jpg',
 'img/batMastersonA.jpg',
 'img/batMastersonA.jpg',
 'img/madameMustacheA.jpg',
 'img/madameMustacheA.jpg',
 'img/jesseJamesA.jpg',
 'img/jesseJamesA.jpg',
 'img/butchCassidyA.jpg',
 'img/butchCassidyA.jpg',
 'img/buffaloBillA.jpg',
 'img/buffaloBillA.jpg'
);

var numOfMatches =.5*faces.length; 



//When player CHOOSES 2 cards

function choose(card) {
if (turns===2) { 
	return;
}
	if (turns===0) {
		firstchoice = card;
	  	if (isFirstCard) {
	  		if (player === 1) {
	  			$('#output').text("0:0 Sec");
	          	$('#output2').text("0:0 Sec");
	  		}
	  		raceStartTime = new Date;
	  		isFirstCard = false;
	  		startTimer();
	  	}
	  	document.images[card].src = faces[card];
	  	document.querySelector("#noiseone").play();
	  	turns = 1;
  	} else { 
  		turns = 2;
  		secondchoice = card;
  		document.images[card].src =faces[card];
  		document.querySelector("#noisetwo").play();
  		check();
  		// tid=setInterval("check()",1500);
   	}
}



/*Checking to see if 2 Cards Match, when a match is made, 
the score increases by 1 point*/

function check() {
 clearInterval(tid);
 if (faces[secondchoice]===faces[firstchoice]) {
     cntr++;
     score++;
     if (cntr == numOfMatches) {
    	// startPause();
    		clearInterval(raceTimer);
			alert("Congrats player " + player + "!  You made " + score + " matches!!!");
          	isFirstCard = true;
          	score = 0;
          	(player === 1 ? player =2 : player =1); 
          	var choice;
       		cntr = 0;
       		newBoard();
       		shuffle();
         }
     	turns = 0;
      return ;
    }
  else {
  	setTimeout(function(){
	    document.images[firstchoice].src = backcard;
   		document.images[secondchoice].src = backcard;
  	},500);
    turns = 0;
    return ;
       }
}



// Shuffles the Cards

function shuffle() {
var holder;
var swaps;
var i;
var j;
	for (swaps=0; swaps<12; swaps++) {
 		i = Math.floor(Math.random()*faces.length);
 		j = Math.floor(Math.random()*faces.length);
 			holder = faces[i];
 			faces[i] = faces[j];
 			faces[j]=holder;
  	}
}



//Turns over cards and creates new board

function newBoard() {
	for (var i = 0; i < faces.length; i++) {
		document.images[i].src = backcard;
	}
}



//Function for starting and stopping 

// 

var raceTimer;
var raceStartTime = new Date;
var startTimer;

startTimer = function () {
raceTimer = setInterval(function() {
		raceEndTime = new Date;
		if (player === 1) {
		$('#output1').text(((raceEndTime - raceStartTime)/1000).toFixed(1) + " Sec"); } else {
			$('#output2').text(((raceEndTime - raceStartTime)/1000).toFixed(1) + " Sec");}
		}, 100);
	
}


