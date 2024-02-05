const play = document.querySelector(".play-pause");
const retour = document.querySelector(".retour");
const suivant = document.querySelector(".suivant");
const titre = document.querySelector(".titre");
let audio = document.querySelector("audio");
const piste = [
  {
    src: "./src/audio-1.mp3",
    name: "instrumental 1",
  },
  {
    src: "./src/audio-2.mp3",
    name: "instrumental 2",
  },
  {
    src: "./src/audio-3.mp3",
    name: "instrumental 3",
  },
  {
    src: "./src/audio-4.mp3",
    name: "instrumental 4",
  },
];

let musicPlay = false;

function playMusic() {
  musicPlay = true;
  audio.play();
  play.classList.add("active");
}
function pauseMusique() {
  musicPlay = false;
  audio.pause();
  play.classList.remove("active");
}

//Lecture - pause du morceau chargé
play.addEventListener("click", () =>
  musicPlay ? pauseMusique() : playMusic()
);

//gestion des audio
function playList(piste) {
  audio.src = piste.src;
  titre.innerHTML = piste.name;
}

let i = 1;
playList(piste[i]);

//avance
function avanceMusic() {
  i++;
  if (i > piste.length - 1) {
    i = 0;
  }
  playList(piste[i]);
  playMusic();
}

suivant.addEventListener("click", avanceMusic);

//recule
function reculMusic() {
  i--;
  if (i < 0) {
    i = piste.length - 1;
  }
  playList(piste[i]);
  playMusic();
}

retour.addEventListener("click", reculMusic);
