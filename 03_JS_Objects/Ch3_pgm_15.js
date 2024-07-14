// A player object

var player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

var player2 = {
    name: "Thorn",
    health: 75,
    place: "The Forest of Shadows",
    items: ["a magic staff", "a healing potion", "a map of the realm"]
};

// Log details for player1
console.log(player1.name);  
console.log(player1.name + " is in " + player1.place);  
console.log(player1.name + " has health " + player1.health);  
console.log("Items: " + player1.items.join(", "));  

// Add an item to player1
player1.items.push("a lantern");
console.log("Updated Items for " + player1.name + ": " + player1.items.join(", "));  

// Remove an item from player1
var itemIndex = player1.items.indexOf("a piece of cheese");
if (itemIndex !== -1) {
    player1.items.splice(itemIndex, 1);
}
console.log("Updated Items for " + player1.name + ": " + player1.items.join(", "));  

// Log details for player2
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);  
console.log(player2.name + " has health " + player2.health);  
console.log("Items: " + player2.items.join(", ")); 



/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item you'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */