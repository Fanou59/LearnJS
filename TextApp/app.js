const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".moins");
const texte = document.querySelector(".txt-taille");
const info = document.querySelector(".infos");
let taille = 14;

plusButton.addEventListener("click", () => {
  augPixl();
  texte.style.fontSize = taille + "px";
});

minusButton.addEventListener("click", () => {
  minPixl();
  texte.style.fontSize = taille + "px";
});

function augPixl() {
  taille += 1;
  txtPx(taille);
}

function minPixl() {
  taille -= 1;
  txtPx(taille);
}

function txtPx(taille) {
  info.innerText = `Taille actuelle: ${taille}px`;
}
