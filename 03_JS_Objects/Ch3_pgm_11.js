// Using a property in a calculation

var player1;
var player2;

player1 = {
    name:  "Max",
    score: 50  
};

player2 = {
    name:  "Anna",
    score: 75
};

player1.score = player1.score * 1.10; 

console.log(player1.name + " has scored " + player1.score);
var totalScore = player1.score + player2.score;


console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);




/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */