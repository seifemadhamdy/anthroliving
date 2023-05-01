let item = [
  {
    image: ["../Assets/Data/Top-Rated/1.webp"],
    name: "Fern Storage Cabinet",
    price: "2698.00",
    productID: "Top-Rated1",
  },
  {
    image: ["../Assets/Data/Top-Rated/2.webp"],
    name: "Gleaming Primrose Mirror",
    price: "1198.50",
    productID: "Top-Rated2",
  },
  {
    image: ["../Assets/Data/Top-Rated/3.webp"],
    name: "Menara Bed",
    price: "1818.60",
    productID: "Top-Rated3",
  },
  {
    image: ["../Assets/Data/Top-Rated/4.webp"],
    name: "House of Hackney Artemis Wallpaper",
    price: "325.00",
    productID: "Top-Rated4",
  },
  {
    image: ["../Assets/Data/Top-Rated/5.webp"],
    name: "Grecian Bust Pot",
    price: "26.40",
    productID: "Top-Rated5",
  },
  {
    image: ["../Assets/Data/Top-Rated/6.webp"],
    name: "Deluxe Tamboured Buffet",
    price: "2698.00",
    productID: "Top-Rated6",
  },
  {
    image: ["../Assets/Data/Top-Rated/7.webp"],
    name: "Lustered Velvet Alastair Quilt",
    price: "159.60",
    productID: "Top-Rated7",
  },
  {
    image: ["../Assets/Data/Top-Rated/8.webp"],
    name: "Luxe Faux Fur Throw Blanket",
    price: "138.00",
    productID: "Top-Rated8",
  },
  {
    image: ["../Assets/Data/Top-Rated/9.webp"],
    name: "Tufted Maribelle Rug",
    price: "73.50",
    productID: "Top-Rated9",
  },
  {
    image: ["../Assets/Data/Top-Rated/10.webp"],
    name: "Textured Trellis Six-Drawer Dresser",
    price: "838.30",
    productID: "Top-Rated10",
  },
  {
    image: ["../Assets/Data/Top-Rated/11.webp"],
    name: "Mindra Curtain",
    price: "54.60",
    productID: "Top-Rated11",
  },
  {
    image: ["../Assets/Data/Top-Rated/12.webp"],
    name: "Quincy Five-Drawer Dresser",
    price: "998.00",
    productID: "Top-Rated12",
  },
  {
    image: ["../Assets/Data/Top-Rated/13.webp"],
    name: "Solid Herringbone Throw Blanket",
    price: "128.00",
    productID: "Top-Rated13",
  },
  {
    image: ["../Assets/Data/Top-Rated/14.webp"],
    name: "Francesca Kaye Vase",
    price: "118.00",
    productID: "Top-Rated14",
  },
  {
    image: ["../Assets/Data/Top-Rated/15.webp"],
    name: "Madelyn Capiz Oval Faceted Chandelier",
    price: "998.00",
    productID: "Top-Rated15",
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
