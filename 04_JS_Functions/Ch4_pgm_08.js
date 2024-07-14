// Displaying a menu

var displayMyMenu;

displayMyMenu = function () {
    console.log("Welcome to the Game Menu!");
    console.log("(1) Start game");
    console.log("(2) Leaderboard");
    console.log("(3) Help");
    console.log("(9) Exit");

    
    var option = parseInt(prompt("Enter your choice:"));

    switch (option) {
        case 1:
            startGame();
            break;
        case 2:
            viewLeaderboard();
            break;
        case 3:
            showHelp();
            break;
        case 9:
            exitMenu();
            break;
        default:
            console.log("Invalid option.");
            break;
    }
};

displayMyMenu();




/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */