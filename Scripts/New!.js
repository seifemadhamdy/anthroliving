let item = [
  {
    image: ["../Assets/Data/New!/1.webp"],
    name: "Positano Indoor/Outdoor Dining Chair",
    price: "250.00",
    productID: "New!1",
  },
  {
    image: ["../Assets/Data/New!/2.webp"],
    name: "Agata Side Plate",
    price: "18.00",
    productID: "New!2",
  },
  {
    image: ["../Assets/Data/New!/3.webp"],
    name: "Bed Threads Scalloped Linen Napkins, Set of 4",
    price: "70.00",
    productID: "New!3",
  },
  {
    image: ["../Assets/Data/New!/4.webp"],
    name: "Poldina Pro Micro Rechargeable LED Portable Table Lamp",
    price: "119.00",
    productID: "New!4",
  },
  {
    image: ["../Assets/Data/New!/5.webp"],
    name: "Mae Indoor/Outdoor Pillow",
    price: "58.00",
    productID: "New!5",
  },
  {
    image: ["../Assets/Data/New!/6.webp"],
    name: "Arc En Ciel Outdoor Folding Table",
    price: "328.00",
    productID: "New!6",
  },
  {
    image: ["../Assets/Data/New!/7.webp"],
    name: "Maeve Organic Sateen Printed Sheet Set",
    price: "58.00",
    productID: "New!7",
  },
  {
    image: ["../Assets/Data/New!/8.webp"],
    name: "Josia Mirror",
    price: "478.00",
    productID: "New!8",
  },
  {
    image: ["../Assets/Data/New!/9.webp"],
    name: "Handcarved Lombok Outdoor Daybed",
    price: "2390.00",
    productID: "New!9",
  },
  {
    image: ["../Assets/Data/New!/10.webp"],
    name: "Kye Organic Cotton Shower Curtain",
    price: "78.00",
    productID: "New!10",
  },
  {
    image: ["../Assets/Data/New!/11.webp"],
    name: "Lucie de Moyencourt Platter",
    price: "88.00",
    productID: "New!11",
  },
  {
    image: ["../Assets/Data/New!/12.webp"],
    name: "Calle Vase",
    price: "28.00",
    productID: "New!12",
  },
  {
    image: ["../Assets/Data/New!/13.webp"],
    name: "Keene Flatware 20-Piece Place Setting",
    price: "78.00",
    productID: "New!13",
  },
  {
    image: ["../Assets/Data/New!/14.webp"],
    name: "Ticket Easter Hot Chocolate Bombs",
    price: "16.00",
    productID: "New!14",
  },
  {
    image: ["../Assets/Data/New!/15.webp"],
    name: "Glenn Ellen Indoor/Outdoor Armchair",
    price: "698.00",
    productID: "New!15",
  },
];

let items = JSON.parse(localStorage.getItem("data")) || [];
document.querySelector("#sort").addEventListener("change", on1);

function on1() {
  let select = document.querySelector("#sort").value;

  if (select == "lowhigh") {
    item.sort(function (a, b) {
      return a.price - b.price;
    });

    display(item);
  } else if (select == "highlow") {
    item.sort(function (a, b) {
      return b.price - a.price;
    });

    display(item);
  } else if (select == "az") {
    item.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      else return 0;
    });

    display(item);
  } else if (select == "za") {
    item.sort(function (a, b) {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      else return 0;
    });

    display(item);
  } else if (select == "shl") {
    item.sort(function (a, b) {
      if (a.size < b.size) return 1;
      if (a.size > b.size) return -1;
      else return 0;
    });

    display(item);
  } else if (select == "slh") {
    item.sort(function (a, b) {
      if (a.size > b.size) return 1;
      if (a.size < b.size) return -1;
      else return 0;
    });

    display(item);
  } else if (select == "Featured") {
    window.location.reload();
  }
}

display1(items);
display(item);

function display(item) {
  document.querySelector("#images").innerHTML = "";

  item.forEach(function (el) {
    let box = document.createElement("div");

    box.addEventListener("click", function () {
      send(el);
    });

    let im = document.createElement("img");
    im.setAttribute("src", el.image[0]);
    im.setAttribute("class", "ChangeImg");
    let nam = document.createElement("p");
    nam.innerText = el.name;
    let pr = document.createElement("p");
    pr.style = "margin-top: 0.25rem";

    if (el.price != "") {
      pr.innerText = `$${el.price}`;
    }

    box.append(im, nam, pr);
    document.querySelector("#images").append(box);
  });

  localStorage.setItem("data", JSON.stringify(item));
}

function display1(items) {
  items.forEach(function (el) {
    let box = document.createElement("div");
    let im = document.createElement("img");
    im.setAttribute("src", el.image);
    let nam = document.createElement("p");
    nam.innerText = el.name;
    let pr = document.createElement("p");
    pr.style = "margin-top: 0.25rem";
    pr.innerText = `$${el.price}`;
    box.append(im, nam, pr);
    document.querySelector("#images").append(box);
  });

  localStorage.setItem("data", JSON.stringify(item));
}

function send(el) {
  localStorage.setItem("obj", JSON.stringify(el));
  window.location.href = "Product.html";
}

document.querySelector("#price").addEventListener("click", pri);
function pri() {
  item.sort(function (a, b) {
    return a.price - b.price;
  });

  display(item);
}

document.querySelector("#size").addEventListener("click", siz);

function siz() {
  item.sort(function (a, b) {
    return a.size - b.size;
  });

  display(item);
}

let changeImg = document.querySelectorAll(".ChangeImg");

changeImg.forEach(function (el, index) {
  let imgOld;

  el.addEventListener(
    "mouseover",
    function Change(event, a = item[index].image) {
      event.preventDefault();
      imgOld = el.getAttribute("src");
      for (let i = 0; i < a.length && a.length > 1; i++) {
        if (a[i] == imgOld) event.target.src = a[i + 1] || a[i - 1];
      }
    }
  );

  el.addEventListener(
    "mouseout",
    function Change(event, a = item[index].image) {
      event.preventDefault();
      event.target.src = imgOld;
    }
  );
});
