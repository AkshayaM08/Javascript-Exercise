// Displaying player information using objects



var getPlayerName = function (playerName) {
    return playerName;
};

var getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var getPlayerItems = function (playerItems) {
    return "Items: " + playerItems;
};

var getBorder = function () {
    return "================================";
};

var getPlayerInfo = function (playerName, playerPlace, playerHealth, playerItems) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getPlayerItems(playerItems);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};


var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: "a rusty key, a piece of cheese"
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    items: "an old map, a magic wand"
};


console.log(getPlayerInfo(player1.name, player1.place, player1.health, player1.items));
console.log(getPlayerInfo(player2.name, player2.place, player2.health, player2.items));

/* Further Adventures
 *
 * 1) Added `items` property to both players.
 * 2) Created `getPlayerItems` function to return a string including the items.
 * 3) Updated `getPlayerInfo` function to include a call to `getPlayerItems`.
 * 4) Changed the calls to `getPlayerInfo` to pass the `items` property as an argument.
 *
 */




/* Further Adventures
 *
 * 1) Add an items property to both players.
 *    e.g. items: "a rusty key, a piece of cheese"
 *
 * 2) Create a getPlayerItems function to return
 *    a sensible string including the items.
 *
 * 3) Update the getPlayerInfo function to
 *    include a call to getPlayerItems.
 *
 * 4) Change the two calls to getPlayerInfo
 *    so they also pass the items property
 *    as an argument.
 *
 */