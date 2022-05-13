/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const heroesUrl = "./../../_shared/api.json";      //"http://localhost:3000/heroes"

    const dataForm = async () => {
        const response = await fetch(heroesUrl);
        const jsonList = await response.json();

        return jsonList.heroes;
         }

    document.getElementById("run").addEventListener("click", function () {
        let i = document.getElementById("hero-id").value;
        let target = document.getElementById("target");

        dataForm()
            .then((res) => {
                target.innerHTML = `Congrats you have chosen ${res[i - 1].name}`
            })
            .catch((err) => {
                if (i > 5) {
                    target.innerHTML = "Sorry, hero not found"
                }
            });
    });

})();