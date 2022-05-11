/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const source = document.getElementById("source");
    const target = document.getElementById("target");
    const newElement= document.createElement("img");
    newElement.src = source.getAttribute("data-image");
    target.appendChild(newElement);
    document.getElementById("source").remove();
        //.setAttribute();

    console .log(source, target)
})
();
