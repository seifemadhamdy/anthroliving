var userData = JSON.parse(localStorage.getItem("loginobj")) || [];
var name = document.getElementById("name");
var phoneNumber = document.getElementById("phoneNumber");
var email = document.getElementById("email");
var password = document.getElementById("password");

document.getElementById("signUpButton").addEventListener("click", () => {
  if (
    name.value == "" ||
    phoneNumber.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    alert("Required fields cannot be left empty.");
  } else {
    let obj = {
      name: name.value,
      phoneNumber: phoneNumber.value,
      mail: email.value,
      password: password.value,
    };

    userData.push(obj);
    localStorage.setItem("loginobj", JSON.stringify(userData));
    window.location.href = "../Pages/Sign-In-Verification.html";
  }
});
