var userData = JSON.parse(localStorage.getItem("loginobj")) || [];
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");

document
  .getElementById("signInButton")
  .addEventListener("click", function login() {
    userData.forEach((element) => {
      if (
        phoneNumber.value == element.phoneNumber &&
        password.value == element.password
      ) {
        window.location.href = "../Pages/Sign-In-Verification.html";
      } else if (password.value == "" || phoneNumber.value == "") {
        alert("Required fields cannot be left empty.");
      } else if (
        phoneNumber.value !== element.phoneNumber &&
        password.value !== element.password
      ) {
        window.location.href = "Sign-Up.html";
      }
    });
  });
