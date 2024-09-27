const endPoint = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE5Zjc5YzQ1ZjAwMTU2OWI0YzciLCJpYXQiOjE3Mjc0MjUxODMsImV4cCI6MTcyODYzNDc4M30.I3iVctbhWa-taIoDKhrsXb8PAnHrmGOY-BJVaW9_CcM";

const retrieveProducts = () => {
  fetch(endPoint, {
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
    .then((data) => {
      getProducts(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProducts = (products) => {
  const productsList = document.getElementById("products");
  productsList.innerHTML = "";
  products.forEach((product) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
    <div class="col px-5 px-sm-0">
        <div class="card shadow-sm">
        <a href="./details.html?id=${product._id}"><img src="${product.imageUrl}" class="w-100 h-fixed-250 card-img-top object-fit-contain p-3" alt="${
      product.name
    }" /></a>
        <div class="card-body d-flex flex-column p-2">
            <p class="mb-1">Price: <span>${product.price.toFixed(2)}</span><span class="currency">$</span></p>
            <h5 class="card-title fs-6 text-nowrap overflow-hidden" style="text-overflow:ellipsis">${product.name}</h5>
            <p class="card-text fs-6 text-nowrap overflow-hidden mb-3" style="text-overflow:ellipsis">${product.description}</p>
        </div>
        <div class="card-footer p-0 btn-group border-0 p-1 bg-body">
                <a href="./details.html?id=${product._id}" class="btn btn-success text-light" title="View details"><i class="bi bi-search"></i></i></a>
                <a href="#" class="btn btn-primary" title="Add to cart"><i class="bi bi-cart-plus text-light"></i></a>
                <a href="./backoffice.html?id=${product._id}&operation=modify" class="btn btn-warning" title="Modify product"><i class="bi bi-pencil"></i></a>
                <a href="./backoffice.html?id=${product._id}&operation=delete" class="btn btn-danger" title="Delete product"><i class="bi bi-trash3"></i></a>
        </div>
    </div>
    `;
    productsList.appendChild(newCol);
  });
};

window.addEventListener("load", () => {
  retrieveProducts();
});
