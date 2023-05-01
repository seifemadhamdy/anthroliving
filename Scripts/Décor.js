let item = [
  {
    image: ["../Assets/Data/Décor/1.webp"],
    name: "Fern Storage Cabinet",
    price: "34.00",
    productID: "Minka Textured Pot",
  },
  {
    image: ["../Assets/Data/Décor/2.webp"],
    name: "Gleaming Primrose Mirror",
    price: "298.00",
    productID: "Retriever Dog Table Lamp",
  },
  {
    image: ["../Assets/Data/Décor/3.webp"],
    name: "Calle Candle Holder",
    price: "18.00",
    productID: "Décor3",
  },
  {
    image: ["../Assets/Data/Décor/4.webp"],
    name: "Les Ottomans Handpainted Bunny Tray",
    price: "133.00",
    productID: "Décor4",
  },
  {
    image: ["../Assets/Data/Décor/5.webp"],
    name: "Gleaming Primrose Vanity Tray",
    price: "54.00",
    productID: "Décor5",
  },
  {
    image: ["../Assets/Data/Décor/6.webp"],
    name: "Ashby Task Lamp",
    price: "298.00",
    productID: "Décor6",
  },
  {
    image: ["../Assets/Data/Décor/7.webp"],
    name: "Faye Planter",
    price: "34.00",
    productID: "Décor7",
  },
  {
    image: ["../Assets/Data/Décor/8.webp"],
    name: "Floral Monogram Trinket Dish",
    price: "16.00",
    productID: "Décor8",
  },
  {
    image: ["../Assets/Data/Décor/9.webp"],
    name: "Nena Flower Knobs, Set of 2",
    price: "22.00",
    productID: "Décor9",
  },
  {
    image: ["../Assets/Data/Décor/10.webp"],
    name: "Cloud Flush Mount",
    price: "448.00",
    productID: "Décor10",
  },
  {
    image: ["../Assets/Data/Décor/11.webp"],
    name: "At First Sight Wall Art",
    price: "178.00",
    productID: "Décor11",
  },
  {
    image: ["../Assets/Data/Décor/12.webp"],
    name: "Eliza Frame",
    price: "26.00",
    productID: "Décor12",
  },
  {
    image: ["../Assets/Data/Décor/13.webp"],
    name: "Flight 13 Wall Art",
    price: "1038.00",
    productID: "Décor13",
  },
  {
    image: ["../Assets/Data/Décor/14.webp"],
    name: "Cloud Chandelier",
    price: "1098.00",
    productID: "Décor14",
  },
  {
    image: ["../Assets/Data/Décor/15.webp"],
    name: "Liz Rattan Sconce",
    price: "98.00",
    productID: "Décor15",
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
