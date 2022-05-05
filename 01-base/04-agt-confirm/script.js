/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var age = prompt("What's your age?");
    while (isNaN(age)) {
        alert("This is not a valid age");
        var age = prompt("What's your age?");
    }
    var gender = prompt("Whats your gender?");
    var town = prompt("Which Town do you live?");

    let validation = confirm("You are " + age + "years old, your gender is" + gender + "and you live in" + town + ".");

    while (validation == false) {
        var age = prompt("What's your age?");
        while (isNaN(age)) {
            alert("This is not a valid age");
            var age = prompt("What's your age?");
        }
        var gender = prompt("Whats your gender?");
        var town = prompt("Which Town do you live?");
        let validation = confirm("You are " + age + "years old, your gender is" + gender + "and you live in" + town + ".");
    }
})
();
