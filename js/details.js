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
  imgCol.classList.add("col-4", "text-center", "pt-5");
  detailsCol.classList.add("col-8");
  imgCol.innerHTML = `<img class="w-100" src="${product.imageUrl}" alt="${product.name}"/>`;
  detailsCol.innerHTML = `
  <h1 class="display-2 mb-0">${product.name}</h1>
    <p class="display-5 fw-medium my-5"><span>Price: </span><span class="text-success">${product.price.toFixed(
      2
    )}</span><span class="text-success currency">$</span></p>
    <div class="shadow-sm rounded-3">
      <dl class="bg-light p-3 ">
          <dt class="text-secondary border border-0 border-bottom border-tertiary mb-2">Product description</dt>
          <dd class="mb-0">${product.description}</dd>
      </dl>
    </div>`;
  productDetails.appendChild(imgCol);
  productDetails.appendChild(detailsCol);
};
