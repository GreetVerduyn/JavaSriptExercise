/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target")
    const table = document.createElement("table");
    let tbody = document.createElement("tbody");

    table.appendChild((tbody));

    let i=0

    for (let i= 0; i<10; i++){
        let row_i = document.createElement("tr");
        let row_data = document.createElement("td");
        row_i.appendChild(row_data);
        tbody.appendChild(row_i);
    }

        target.appendChild(table);

})();
