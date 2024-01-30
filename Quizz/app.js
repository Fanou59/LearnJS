const reponses = ["b", "d", "c", "a", "c", "b"];
const button = document.querySelector("button");
const q1 = document.getElementsByName("q1");
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const q4 = document.getElementsByName("q4");
const q5 = document.getElementsByName("q5");
const q6 = document.getElementsByName("q6");
const h2 = document.querySelector("h2");
const scoreNum = document.querySelector(".score");
const info = document.querySelector(".info");
let valeur = [];
let scoreFinal = 0;
let score = [];

function collectResponse(q) {
  for (let i = 0; i < q.length; i++) {
    if (q[i].checked) {
      valeur.push(q[i].value);
    }
  }
}

function compareTableau(tab1, tab2) {
  if (tab1.length !== tab2.length) {
    return false;
  }
  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] === tab2[i]) {
      score.push(true);
    } else {
      score.push(false);
    }
  }
  return score;
}

function calculScore(tabScore) {
  for (let rep of tabScore) {
    if (rep === true) {
      scoreFinal += 1;
    }
  }
  return scoreFinal;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  scoreFinal = 0;
  score = [];
  collectResponse(q1);
  collectResponse(q2);
  collectResponse(q3);
  collectResponse(q4);
  collectResponse(q5);
  collectResponse(q6);
  compareTableau(reponses, valeur);
  calculScore(score);

  if (scoreFinal < 6) {
    h2.innerHTML = `\ud83d\ude09 Il y a ${6 - scoreFinal} erreurs \ud83d\ude09`;
  } else {
    h2.innerHTML = "Parfait !";
  }

  scoreNum.innerText = `Votre score est de ${scoreFinal} / 6`;
  switch (scoreFinal) {
    case 0:
      info.innerText = "Baltringue !";
      break;
    case 1:
      info.innerText = "T'es à fond là ?";
      break;
    case 2:
      info.innerText = "Tu peux mieux faire...";
      break;
    case 3:
      info.innerText = "Encore un effort !";
      break;
    case 4:
      info.innerText = "Encore un effort !";
      break;
    case 5:
      info.innerText = "Presque";
      break;
    default:
      info.innerText = "Amazing !";
  }
  valeur = [];
});
