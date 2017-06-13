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
  let numAce = 0;

  for (let i = 0; i < hand.length; i++){
    if (parseInt(hand[i])){
      hand[i] = parseInt(hand[i]);
    }

    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
      score += 10;
    }
    else if (hand[i] === "A"){
      numAce++;
    }
    else {
      score += hand[i];
    }
  }

  for (let i = 0; i < numAce; i++){
    if (score + 11 > 21){
      score++;
    }else {
      score += 11;
    }
  }

  return score;

}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
