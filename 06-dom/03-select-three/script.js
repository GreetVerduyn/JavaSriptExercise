/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Select the elements with the class "target"
    // and replace their content with "owned"

    let x=document.getElementsByClassName("target")
    for(var i = 0; i < x.length; i++){
        x[i].innerText="owned"};

})();
