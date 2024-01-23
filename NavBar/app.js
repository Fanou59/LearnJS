const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  burger.classList.remove("active");
});
