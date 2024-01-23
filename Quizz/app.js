const reponses = ["b", "d", "c", "a", "c", "b"];
const button = document.querySelector("button");
const q1 = document.getElementsByName("q1");
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const q4 = document.getElementsByName("q4");
const q5 = document.getElementsByName("q5");
const q6 = document.getElementsByName("q6");
let valeur = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  collectResponse(q1);
  collectResponse(q2);
  collectResponse(q3);
  collectResponse(q4);
  collectResponse(q5);
  collectResponse(q6);
  compareTableau(reponses, valeur);
  console.log(valeur);
  valeur = [];
});

function collectResponse(q) {
  for (let i = 0; i < q.length; i++) {
    if (q[i].checked) {
      valeur.push(q[i].value);
    }
  }
}
//il faut une fonction qui return les TRUE et les FALSE puis on va compter le nb de TRUE
function compareTableau(tab1, tab2) {
  let score = [];
  if (tab1.length !== tab2.length) {
    return false;
  }
  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] === tab2[i]) {
      score.push(true);
    } else {
      score.push(false);
    }
    calculScore(score);
  }
}

function calculScore(tabScore) {
  let scoreFinal = 0;
  for (let rep of tabScore) {
    if (rep === true) {
      scoreFinal += 1;
    }
    console.log(scoreFinal);
  }
}
