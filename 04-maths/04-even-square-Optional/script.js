/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const square = (x) => {
        return Math.pow(x,2);
    }

    document.getElementById("run").addEventListener("click", function() {
        res = [];
        for (let i = 1; square(i)<21; i++){
            res.push(square(i));
        }
        alert (res);


    });

})();
