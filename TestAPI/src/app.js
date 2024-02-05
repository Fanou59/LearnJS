const form = document.querySelector("form");
const codePostal = document.querySelector("#codePostal");
const villeAffichage = document.querySelector("#ville");
const flag = document.querySelector("#pays");
const country = document.querySelector("#country");
let url = "https://geo.api.gouv.fr/communes?codePostal=";
let urlFlag = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url + codePostal.value)
    .then((reponse) => reponse.json())
    .then((data) => {
      let villeInfos = [];

      for (ville of data) {
        let nomVille = ville.nom;
        let population = ville.population;

        villeInfos.push(
          `${nomVille} est une ville de </br> ${population} habitants.`
        );
      }

      villeAffichage.innerHTML = villeInfos.join("</br><hr>");
    })
    .catch((err) => console.log("Erreur : " + err));
});
