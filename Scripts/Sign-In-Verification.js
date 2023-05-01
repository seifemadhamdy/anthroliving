let res_otp = otp();
alert("Your verification code is " + res_otp + ".");

function otpfun() {
  let add =
    document.getElementById("otp1").value +
    document.getElementById("otp2").value +
    document.getElementById("otp3").value +
    document.getElementById("otp4").value;
  add = +add;

  if (res_otp === add) {
    localStorage.setItem("x", true);
    self.location = "../Pages/Homepage.html";
  } else {
    alert("Entered verification code is incorrect.");
  }
}

function otp() {
  return Math.floor(1000 + Math.random() * 9000);
}
