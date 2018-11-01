var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
var cardTwo = cards[0];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

if  (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) { alert("You found a match!")};
if  (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) { alert("Sorry, Try Again.")};
