/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function() {

        const months =["January","February","March","April","May","June","July","August","September","October","November","December"];
        let inputYear = document.getElementById("year").value;
        let monthsWithFriday13 = []
        for (let month = 0; month < 12; month++) {
            let d = new Date(inputYear, month, 13);
            if (d.getDay() == 5) {
                let name = months[d.getMonth()];
                monthsWithFriday13.push(name);
            }
        };
        alert (monthsWithFriday13)
    });


})();


