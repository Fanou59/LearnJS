const login = document.getElementById("login");
const signup = document.getElementById("signup");

signup.addEventListener("click", () => {
  signup.checked = true;
  login.checked = false;
});
