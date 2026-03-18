const currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  window.location.href = "index.html";
}

document.getElementById("username").innerText = currentUser;

let products =
  JSON.parse(localStorage.getItem("products_" + currentUser)) || [];

function saveProducts() {
  localStorage.setItem(
    "products_" + currentUser,
    JSON.stringify(products)
  );
}

function renderProducts() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach((p, i) => {
    table.innerHTML += `
      <tr>
        <td>
          <input type="text" value="${p.name}" 
          onchange="editProduct(${i}, 'name', this.value)" />
        </td>
        <td>
          <input type="number" value="${p.price}" 
          onchange="editProduct(${i}, 'price', this.value)" />
        </td>
        <td>
          <button onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>`;
  });
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);

  if (!name || isNaN(price)) {
    alert("Enter valid product name and price");
    return;
  }

  products.push({ name, price });
  saveProducts();
  renderProducts();

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function editProduct(index, field, value) {
  products[index][field] =
    field === "price" ? parseFloat(value) : value;
  saveProducts();
}

function deleteProduct(index) {
  if (confirm("Delete this product?")) {
    products.splice(index, 1);
    saveProducts();
    renderProducts();
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// Initial render
renderProducts();
