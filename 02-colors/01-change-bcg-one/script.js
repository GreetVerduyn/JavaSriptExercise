/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let buttons = ["red", "green", "yellow", "blue"];

    for (let i = 0; i < buttons.length; i++) {
        let color = buttons[i];
        let colorButton = document.getElementById(color);
        colorButton.addEventListener("click", function () {
            document.body.style.background = color;
        });
    }

})();
/*
function changeBackground(color) {
    document.body.style.background = color;
}*/


