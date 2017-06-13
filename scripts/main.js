/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let score = 0;
  let scoreAce = 0;

  for (let i = 0; i < hand.length; i++){
    if (parseInt(hand[i])){
      hand[i] = parseInt(hand[i]);
    }

    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
      score += 10;
      scoreAce += 10;
    }
    else if (hand[i] === "A"){
      score ++;
      scoreAce += 11;
    }
    else {
      score += hand[i];
      scoreAce += hand[i];
    }
  }
  let result = 0;
  
  if (Math.abs(score - 21) > Math.abs(scoreAce - 21)){
    result = scoreAce;
  }
  else {
    result = score;
  }

  return result;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
