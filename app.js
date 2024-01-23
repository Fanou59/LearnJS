const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  h1.innerText = `Welcome ${getValue()}`;
});

const getValue = () => input.value;
