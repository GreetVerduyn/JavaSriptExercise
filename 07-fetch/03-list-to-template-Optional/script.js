/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   const dataForm = async () => {
       const response = await fetch ("./../../_shared/api.json");
       const jsonList = await response.json();

    return jsonList.heroes;
   }

   document.getElementById('run').addEventListener("click", function (){
       let i = 0
       let target = document.getElementById("target");
       let template = document.getElementById("tpl-hero");


       dataForm()
           .then((res) => {
               for (i; i < res.length; i++) {
                   const item = template.content.cloneNode(true);
                   item.querySelector('.name').innerText = res[i].name;
                   item.querySelector('.alter-ego').innerText = res[i +1].alterEgo;
                   item.querySelector('.powers').innerText = res[i +1].abilities;

                   target.appendChild(item);
               };
           });

   });
})();
