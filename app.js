const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");

password.addEventListener("input", () => {
  password.classList.remove("alert");
  confirmPassword.classList.remove("alert");
});
confirmPassword.addEventListener("input", () => {
  confirmPassword.classList.remove("alert");
  password.classList.remove("alert");
});

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    password.classList.add("alert");
    confirmPassword.classList.add("alert");
  }
});
