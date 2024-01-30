const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const liste = document.querySelectorAll(".items span");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("menu-active");
});

// récupérer l'index de la liste LI pour click
liste.forEach((item) => {
  item.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("menu-active");
  });
});
