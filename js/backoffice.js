// serve e chiave di accesso
const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE5Zjc5YzQ1ZjAwMTU2OWI0YzciLCJpYXQiOjE3Mjc0MjUxODMsImV4cCI6MTcyODYzNDc4M30.I3iVctbhWa-taIoDKhrsXb8PAnHrmGOY-BJVaW9_CcM";

// gestisco i parametri nell'url
const windowURL = location.search;
const prodID = new URLSearchParams(windowURL).get("id");
const operation = new URLSearchParams(windowURL).get("operation");
// let product;

// controlla se c'è l'id nella url e prevalorizza i campi del form
if (prodID) {
  fetch(endPoint + prodID, {
    headers: {
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((product) => {
      const addBtn = document.getElementById("add");
      const modifyBtn = document.getElementById("modify");
      const deleteBtn = document.getElementById("delete");
      addBtn.classList.add("d-none");
      if (operation === "modify") {
        modifyBtn.classList.remove("d-none");
      } else if (operation === "delete") {
        deleteBtn.classList.remove("d-none");
      }
      const name = document.getElementById("name");
      const description = document.getElementById("description");
      const brand = document.getElementById("brand");
      const imageUrl = document.getElementById("imageUrl");
      const price = document.getElementById("price");
      name.value = product.name;
      description.value = product.description;
      brand.value = product.brand;
      brand.value = product.brand;
      imageUrl.value = product.imageUrl;
      price.value = product.price;
    })
    .catch((err) => {
      console.log(err);
    });
}

class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

// fetch con method POST
const createProduct = (product) => {
  fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json",
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("Product correctly created.");
      } else {
        throw new Error("Fetch error!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// fetch con method DELETE
const deleteProduct = (prodID) => {
  fetch(endPoint + prodID, {
    method: "DELETE",
    headers: {
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("Product correctly deleted.");
      } else {
        throw new Error("Fetch error!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// fetch con method PUT (modifica)
const modifyProduct = (prodID, productObj) => {
  fetch(endPoint + prodID, {
    method: "PUT",
    body: JSON.stringify(productObj),
    headers: {
      "Content-type": "application/json",
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("Product correctly changed.");
      } else {
        throw new Error("Fetch error!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// creazione nuovo prodotto
const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("price").value;
  const newProduct = new Product(name, description, brand, imageUrl, price);
  setTimeout(() => {
    location.replace("./backoffice.html");
  }, 500);
  createProduct(newProduct);
});

// cancellazione prodotto
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", () => {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "<p class='text-center mb-0'>Are you sure you want to delete this product?</p>";
  const radioBtn = Array.from(document.getElementsByClassName("btn-check"));
  radioBtn.forEach((radio) => {
    radio.onclick = (e) => {
      value = e.target.value;
      if (value === "yes") {
        deleteProduct(prodID);
        setTimeout(() => {
          location.replace("./backoffice.html");
        }, 500);
      }
    };
  });
});

// modifica del prodotto
const modifyBtn = document.getElementById("modify");
modifyBtn.addEventListener("click", () => {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const brand = document.getElementById("brand");
  const imageUrl = document.getElementById("imageUrl");
  const price = document.getElementById("price");
  const modifiedProduct = new Product(name.value, description.value, brand.value, imageUrl.value, price.value);
  // console.log(modifiedProduct);
  modifyProduct(prodID, modifiedProduct);
});

// reset del form
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "<p class='text-center mb-0'>Are you sure you want to reset all input fields?</p>";
  const radioBtn = Array.from(document.getElementsByClassName("btn-check"));
  radioBtn.forEach((radio) => {
    radio.onclick = (e) => {
      value = e.target.value;
      if (value === "yes") {
        location.replace("./backoffice.html");
      }
    };
  });
});

const tempArray = [
  {
    name: "Skateboard Elettrico Xtreme",
    description: "Skateboard elettrico con motore potente e autonomia fino a 25 km. Perfetto per il divertimento e la mobilità urbana.",
    brand: "Xtreme Skate",
    imageUrl: "https://img.fantaskycdn.com/2bfda609c26d23f81a2fbebab66d8042_1080x.jpg",
    price: 650.0
  },
  {
    name: "Hoverboard Smart Balance",
    description: "Hoverboard con sistema di autobilanciamento, luci LED e connessione Bluetooth per musica durante il viaggio.",
    brand: "SmartRide",
    imageUrl: "https://i.ebayimg.com/images/g/UAoAAOSwxaRm5pxY/s-l1600.webp",
    price: 320.0
  },
  {
    name: "Monoruota Elettrico Pro X1",
    description: "Monoruota elettrico con alta stabilità e capacità di raggiungere velocità fino a 30 km/h. Perfetto per i tragitti veloci in città.",
    brand: "MonoRider",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/A37ba45b6740f4cf6b90eface7ad783d0u/Acquista-5-ottieni-2-gratis-InMotions-V11-monociclo-elettrico-potente-2200w-motor-Peaks-Power-3000wv-consegna.jpeg_.webp",
    price: 850.0
  },
  {
    name: "Skateboard Elettrico Off-Road",
    description: "Skateboard elettrico per percorsi accidentati con ruote grandi e ammortizzatori. Ideale per avventure all'aperto.",
    brand: "Adventure Skates",
    imageUrl:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf473c0922a104f8cba7fb132e9491d12a/1500w-60kph-4-ruote-0km-la-gamma-mph-drive-off-road-buggy-skateboard-elettrico-pi-veloce.jpg_.webp",
    price: 950.0
  },
  {
    name: "E-Roller Compact Mini",
    description: "Un roller elettrico compatto e leggero, facile da trasportare e perfetto per brevi spostamenti urbani.",
    brand: "E-Motion",
    imageUrl: "https://img.kwcdn.com/product/fancy/7680d92e-5ecb-476c-8d9c-ff2f6312361e.jpg?imageView2/2/w/650/q/50/format/webp",
    price: 280.0
  }
];

// tempArray.forEach((obj) => {
//   const newProduct = new Product(obj.name, obj.description, obj.brand, obj.imageUrl, obj.price);
//   fetch(endPoint, {
//     method: "POST",
//     body: JSON.stringify(newProduct),
//     headers: {
//       "Content-type": "application/json",
//       Authorization: apiKey
//     }
//   })
//     .then((response) => {
//       if (response.ok) {
//         // alert("Product correctly created.");
//       } else {
//         throw new Error("Fetch error!");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
