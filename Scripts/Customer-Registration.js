let isCustomerRegistered = localStorage.getItem("x");

if (isCustomerRegistered) {
  let sign_out = document.querySelector("#signIn_signUp>div");
  sign_out.style =
    "color: black; font-size: small; touch-action: manipulation; position: relative; z-index: 2; display: inline-block; text-align: center; margin: 1rem 0.25rem; padding: 1rem; text-decoration: none; cursor:pointer; margin-right: 2rem";
  sign_out.innerHTML = "Sign Out";
  sign_out.addEventListener("click", () => {
    localStorage.removeItem("x");
    window.location.reload();
  });
}

document.getElementById("cart").addEventListener("click", () => {
  if (isCustomerRegistered) {
    self.location = "../Pages/Cart.html";
  } else {
    alert("You need to be signed in first.");
  }
});
