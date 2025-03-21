
var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");  

    showPlayerName(playerName);  

    showLine(30);  

    showPlayerPlace(playerName, playerPlace);  
    showPlayerHealth(playerName, playerHealth);

    showLine(30);
    console.log("");  
};


var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};


showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);


var showLine = function (length) {
    var line = "--------------------";  
    console.log(line.substring(0, length));  
};


var showPlayerNameInBox = function (playerName) {
    var nameLength = playerName.length + 4;
    showLine(nameLength);
    console.log("* " + playerName + " *");  
    showLine(nameLength); 
};


showPlayerNameInBox(player1.name);
showPlayerNameInBox(player2.name);  

var showAsteriskLine = function (length) {
    var line = "********************"; 
    console.log(line.substring(0, length)); 
};


var showPlayerNameInAsteriskBox = function (playerName) {
    var nameLength = playerName.length + 4;  
    showAsteriskLine(nameLength);  
    console.log("* " + playerName + " *");  
    showAsteriskLine(nameLength);  
};


showPlayerNameInAsteriskBox(player1.name);  
showPlayerNameInAsteriskBox(player2.name);  





/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */