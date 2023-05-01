let item = [
  {
    image: ["../Assets/Data/Furniture/1.webp"],
    name: "Judarn Asymmetrical Serpentine Sofa",
    price: "3998.00",
    productID: "Furniture1",
  },
  {
    image: ["../Assets/Data/Furniture/2.webp"],
    name: "Judarn Sculptural Chair",
    price: "898.00",
    productID: "Furniture2",
  },
  {
    image: ["../Assets/Data/Furniture/3.webp"],
    name: "Pamela Accent Chair",
    price: "998.00",
    productID: "Furniture3",
  },
  {
    image: ["../Assets/Data/Furniture/4.webp"],
    name: "Embroidered Velvet Rosanna Chair",
    price: "1498.00",
    productID: "Furniture4",
  },
  {
    image: ["../Assets/Data/Furniture/5.webp"],
    name: "Mark D. Sikes Canopy Bed",
    price: "2698.00",
    productID: "Furniture5",
  },
  {
    image: ["../Assets/Data/Furniture/6.webp"],
    name: "Hemming Bed",
    price: "658.80",
    productID: "Furniture6",
  },
  {
    image: ["../Assets/Data/Furniture/7.webp"],
    name: "Handcarved Low Lombok Bed",
    price: "1018.80",
    productID: "Furniture7",
  },
  {
    image: ["../Assets/Data/Furniture/8.webp"],
    name: "Savi Striped Inlay Coffee Table",
    price: "1698.00",
    productID: "Furniture8",
  },
  {
    image: ["../Assets/Data/Furniture/9.webp"],
    name: "Sonali Round Coffee Table",
    price: "1278.40",
    productID: "Furniture9",
  },
  {
    image: ["../Assets/Data/Furniture/10.webp"],
    name: "Tree Dwelling Coffee Table",
    price: "1198.00",
    productID: "Furniture10",
  },
  {
    image: ["../Assets/Data/Furniture/11.webp"],
    name: "Isla Six-Drawer Dresser",
    price: "2498.00",
    productID: "Furniture11",
  },
  {
    image: ["../Assets/Data/Furniture/12.webp"],
    name: "Handcarved Lombok Three-Drawer Dresser",
    price: "1190.00",
    productID: "Furniture12",
  },
  {
    image: ["../Assets/Data/Furniture/13.webp"],
    name: "Carved Thalia Armoire",
    price: "2498.00",
    productID: "Furniture13",
  },
  {
    image: ["../Assets/Data/Furniture/14.webp"],
    name: "Velvet Lena Elowen Dining Chair",
    price: "598.00",
    productID: "Furniture14",
  },
  {
    image: ["../Assets/Data/Furniture/15.webp"],
    name: "Leather Hagen Dining Chair",
    price: "698.00",
    productID: "Furniture15",
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
