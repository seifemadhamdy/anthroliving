let cartDataArray = JSON.parse(localStorage.getItem("Basket")) || [];
localStorage.setItem("item", JSON.stringify(cartDataArray));
let subtotal = document.querySelector("#subtotal");
let total = document.querySelector("#total");
let promo = document.querySelector("#ProceedToCheckout-btn");
displayTable(cartDataArray);

function displayTable(cartDataArray) {
  document.querySelector("tbody").innerHTML = "";
  cartDataArray.forEach(function (element, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.id = "fitThisImgInCart";
    img.setAttribute("src", element.image);
    let td2 = document.createElement("td");
    td2.innerHTML = `${element.name}`;
    td2.style.textAlign = "left";
    let td3 = document.createElement("td");
    td3.innerText = "$" + element.price;
    let td5 = document.createElement("td");
    td5.className = "subtotalFromDocument";

    let totalPrice = function finding(element) {
      let price = +element.price * 1;
      return price;
    };

    td5.innerHTML = "$" + totalPrice(element) + "<br>";
    let td4 = document.createElement("td");
    let selectquantity = document.createElement("select");
    selectquantity.id = "cartSelect-tag";

    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.innerText = i;
      selectquantity.append(option);
    }

    selectquantity.addEventListener("change", function () {
      if (eval(selectquantity.value >= 1)) {
        let total1 = eval(element.price * selectquantity.value);
        td5.innerText = "$" + total1.toFixed(2);
      }

      let subtotalFromDocument = document.querySelectorAll(
        ".subtotalFromDocument"
      );

      let sumOfAll = 0;

      for (let i = 0; i < subtotalFromDocument.length; i++) {
        let x = subtotalFromDocument[i].innerText;
        let y = "";

        for (let j = 1; j < x.length; j++) {
          y += x[j];
        }

        sumOfAll += +y;
      }

      subtotal.innerText = "$" + sumOfAll;
      total.innerText = "$" + sumOfAll;
    });

    let td6 = document.createElement("td");
    td6.innerText = "Remove";
    td6.className = "hover";
    td6.style.color = "rgb(74, 166, 197)";

    td6.addEventListener("click", function () {
      del(element, index);
    });

    td1.append(img);
    td4.append(selectquantity);
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}

function del(element, index) {
  cartDataArray.splice(index, 1);
  let newTotal = "";

  for (let i = 1; i < total.innerText.length; i++) {
    newTotal += total.innerText[i];
  }

  total.innerText = "$" + eval(newTotal - element.price);
  let newSubTotal = "";

  for (let i = 1; i < subtotal.innerText.length; i++) {
    newSubTotal += subtotal.innerText[i];
  }

  total.innerText = "$" + eval(newTotal - element.price);
  subtotal.innerText = "$" + eval(newSubTotal - element.price);
  localStorage.setItem("Basket", JSON.stringify(cartDataArray));
  displayTable(cartDataArray);
  window.location.reload();
}

promo.addEventListener("click", function () {
  alert("Successfully purchased items for a total of " + total.innerText + ".");
});
