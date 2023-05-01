let Arr = JSON.parse(localStorage.getItem("obj"));
let x = document.createElement("img");
x.setAttribute("src", Arr.image);
let imageofProd = document.querySelector("#cartImage");
imageofProd.append(x);
let headProd = document.querySelector("#prodNameHead1");
headProd.innerText = Arr.name;
let y = document.querySelector("#itemDetails");
let prodPrice = document.createElement("p");
prodPrice.id = "priceOfProduct";
let quantity = document.createElement("div");
quantity.setAttribute("id", "qtyDiv");
quantity.innerText = "Quantity";
let qty = document.createElement("div");
qty.setAttribute("id", "quantity1");
let selectTag = document.createElement("select");
selectTag.setAttribute("id", "quantity");
let option1 = document.createElement("option");
option1.innerText = "1";
let option2 = document.createElement("option");
option2.innerText = "2";
let option3 = document.createElement("option");
option3.innerText = "3";
let option4 = document.createElement("option");
option4.innerText = "4";
selectTag.append(option1, option2, option3, option4);
qty.append(selectTag);
let size = document.createElement("div");
size.setAttribute("id", "size");
let s1 = document.createElement("div");
s1.innerText = "S";
let s2 = document.createElement("div");
s2.innerText = "M";
let s3 = document.createElement("div");
s3.innerText = "L";
let s4 = document.createElement("div");
s4.innerText = "XL";
size.append(s1, s2, s3, s4);
let buttonBasket = document.createElement("button");
buttonBasket.innerText = "Add to Cart";
buttonBasket.id = "basketcart";
prodPrice.innerText = `$` + Arr.price;
y.append(prodPrice, quantity, qty, size, buttonBasket);

let sizeselect = document.querySelectorAll("#size>div");

for (let i = 0; i < sizeselect.length; i++) {
  sizeselect[i].addEventListener("click", background);
  function background() {
    sizeselect[i].style.border = "3px solid blue";
  }
}

let arrayforBasket = JSON.parse(localStorage.getItem("Basket")) || [];
buttonBasket.addEventListener("click", function () {
  let x = localStorage.getItem("x");
  if (!x) {
    alert("You need to be signed in first.");
  } else {
    arrayforBasket.push(Arr);
    localStorage.setItem("Basket", JSON.stringify(arrayforBasket));
    alert("Successfully added Item to cart.");
  }
});
