// Generating the keyboard code code using even listener. 

// The image below.
const keyDisplay = document.getElementById('key-display');

// Add event listener to capture key presses
document.addEventListener('keydown', event => {
    keyDisplay.textContent = `Key Code: ${event.keyCode}`;
});
// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

