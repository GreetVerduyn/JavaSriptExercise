/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        const field_1 = document.getElementById("pass-one");
        const field_2 = document.getElementById("pass-two");

        if (field_1.value !== field_2.value) {
            field_1.style.borderBlockColor= "red";
            field_2.style.borderBlockColor= "red";
        }

})

})();
