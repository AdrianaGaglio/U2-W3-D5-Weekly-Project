// serve e chiave di accesso
const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE5Zjc5YzQ1ZjAwMTU2OWI0YzciLCJpYXQiOjE3Mjc0MjUxODMsImV4cCI6MTcyODYzNDc4M30.I3iVctbhWa-taIoDKhrsXb8PAnHrmGOY-BJVaW9_CcM";

// gestisco i parametri nell'url
const windowURL = location.search;
const prodID = new URLSearchParams(windowURL).get("id");
let product;

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
      modifyBtn.classList.remove("d-none");
      deleteBtn.classList.remove("d-none");
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
  createProduct(newProduct);
});

// cancellazione prodotto
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", () => {
  deleteProduct(prodID);
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
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const radioBtn = Array.from(document.getElementsByClassName("btn-check"));
  let value = "";
  radioBtn.forEach((radio) => {
    if (radio.checked) {
    }
  });
});
