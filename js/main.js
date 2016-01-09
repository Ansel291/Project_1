console.log("active!")


// Introductory jQuery Transitions of the Intro Image,
// game description/directions, and the 10 individual
// images with their names included

$( ".containerIntro" ).on( "click", function() {
    $( ".containerIntro" ).fadeOut( 1000, function(){
       $( ".containerInstruc" ).fadeIn(1000);
    });
});

$( ".containerInstruc" ).on( "click", function() {
    $( ".containerInstruc" ).fadeOut( 1000, function(){
       $( ".containerPeople" ).fadeIn(1000);
    });
});

$( ".containerPeople" ).on( "click", function() {
    $( ".containerPeople" ).fadeOut( 1000, function() {
       	$( ".containerHell" ).fadeIn( 1000, function() {
       		$( ".containerHell" ).delay(3500).fadeOut(1000,function() {
       			$( ".container" ).fadeIn(1000);
       		});
       	});
    });
});


// Variables of the Card game

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

var faces = [
 'img/docHolliday.jpg',
 'img/josephine.jpg',
 'img/billyTheKid.jpg',
 'img/wyattEarp.jpg',
 'img/madameMustache.jpg',
 'img/batMasterson.jpg',
 'img/jesseJames.jpg',
 'img/bonnieAndClyde.jpg',
 'img/buffaloBill.jpg',
 'img/butchCassidy.jpg',
 'img/butchCassidy.jpg',
 'img/wyattEarp.jpg',
 'img/madameMustache.jpg',
 'img/batMasterson.jpg',
 'img/josephine.jpg',
 'img/buffaloBill.jpg',
 'img/bonnieAndClyde.jpg',
 'img/jesseJames.jpg',
 'img/docHolliday.jpg',
 'img/billyTheKid.jpg'
];

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
	  			$('#output1').text("0:0 Sec");
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
  		// tid=setInterval("check()",1000);
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
    		clearInterval(raceTimer);
			alert("Congrats player " + player + "!  You made " + score + " matches!!!");
       		isFirstCard = true;
        	score = 0;
        	if (player ===2) {
        		declareWinner();
        		}
        	(player === 1 ? player =2 : player =1);
        	// var choice;
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



//Declare Winner Function

var $player1Time = $('#output1');
var $player2Time = $('#output2');
var player1Value;
var player2Value;

var declareWinner = function(player1Time, player2Time) {
	player1Value = parseFloat($player1Time.html());
	player2Value = parseFloat($player2Time.html());
		if (player1Value < player2Value) {
			alert("Player 1 finished with a time of " + player1Value + " seconds and player 2 finished with a time of " + player2Value + " seconds.  Player 1 wins!!");
			$( ".container" ).fadeOut( 1000, function(){
    		$( ".containerOneWinsPartOne" ).fadeIn( 1000, function(){
    		$( ".containerOneWinsPartOne" ).delay(4000).fadeOut( 1000, function(){
    		$( ".containerOneWinsPartTwo" ).fadeIn( 1000, function(){
      		});
    	});
	});
});
		} else {
			alert("Player 1 finished with a time of " + player1Value + " seconds and player 2 finished with a time of " + player2Value + " seconds.  Player 2 wins!!");
			$( ".container" ).fadeOut( 1000, function(){
    		$( ".containerTwoWinsPartOne" ).fadeIn( 1000, function(){
			$( ".containerTwoWinsPartOne" ).delay(4000).fadeOut( 1000, function(){
    		$( ".containerTwoWinsPartTwo" ).fadeIn( 1000, function(){
      		});
  	 	});
			});
    	});
	}
}




