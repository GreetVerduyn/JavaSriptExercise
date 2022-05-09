/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    //   let ageDif = Date.now() - birthday();


    const button = document.getElementById("run")


    button.addEventListener("click", function () {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value - 1;
        let year = document.getElementById("dob-year").value;


        let birthday = new Date(year, month, day);
        let today = new Date();

        let ageYear = (today.getFullYear() - birthday.getFullYear());
        let ageMonth = (today.getMonth() - birthday.getMonth());

        if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < birthday.getDate())) {
            ageYear--;
        }
        alert (ageYear);

    });
})
();
