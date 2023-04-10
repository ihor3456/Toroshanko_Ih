let btnPass = document.querySelectorAll(".icon-password");

btnPass.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("fa-eye-slash");
    const input = btn.previousElementSibling;
    console.log(input);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});

const form = document.querySelector(".password-form");
const error = document.querySelector(".error");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.password.value === form.confirmPassword.value) {
    alert("You are welcome;");
    error.textContent = "";
  } else {
    error.textContent = "Потрібно ввести однакові значення";
  }
});
