const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE5Zjc5YzQ1ZjAwMTU2OWI0YzciLCJpYXQiOjE3Mjc0MjUxODMsImV4cCI6MTcyODYzNDc4M30.I3iVctbhWa-taIoDKhrsXb8PAnHrmGOY-BJVaW9_CcM";

// gestisco i parametri nell'url
const windowURL = location.search;
const prodID = new URLSearchParams(windowURL).get("id");

const retrieveSingleProduct = (id) => {
  fetch(endPoint + id, {
    headers: {
      Authorization: apiKey
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Fetch error");
      }
    })
    .then((product) => {
      getProductDetails(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

retrieveSingleProduct(prodID);

const getProductDetails = (product) => {
  const productDetails = document.getElementById("productDetails");
  productDetails.innerHTML = "";
  const imgCol = document.createElement("div");
  const detailsCol = document.createElement("div");
  imgCol.classList.add("col-3", "text-center");
  detailsCol.classList.add("col-9");
  imgCol.innerHTML = `<img class="w-75" src="${product.imageUrl}" alt="${product.name}"/>`;
  detailsCol.innerHTML = `
  <h1>${product.name}</h1>
    <p class="fs-3 fw-medium"><span>Price: </span><span>${product.price.toFixed(2)}</span><span class="currency">$</span></p>
    <dl>
        <dt>Product description</dt>
        <dd>${product.description}</dd>
    </dl>`;
  productDetails.appendChild(imgCol);
  productDetails.appendChild(detailsCol);
};
