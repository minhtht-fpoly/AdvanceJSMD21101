// fetch("http://localhost:3000/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// async function getData() {
//   const respon = await fetch("http://localhost:3000/products");
//   const data = await respon.json();
//   console.log(data);
// }
// getData();
function renderProducts(arr) {
  renderString = ``;
  arr.forEach((product, i) => {
    renderString =
      renderString +
      `<tr class="align-middle text-center">
            <th scope="row">${i + 1}</th>
            <td class="text-start">${product.name}</td>
            <td class="text-danger fw-bold">${product.price.toLocaleString()} đ</td>
            <td>
                <span class="badge bg-info text-dark">${product.category}</span>
            </td>
            <td>
                <span class="badge ${product.stock > 20 ? "bg-success" : product.stock > 10 ? "bg-warning" : "bg-danger"}">
                    ${product.stock}
                </span>
            </td>
            <td>
                <button onclick="xoa(${product.id})" class="btn btn-danger btn-sm me-2">
                    Xóa
                </button>
                <button class="btn btn-warning btn-sm" onclick="sua()">
                    <a href= "edit.html?id=${product.id}">Sửa</a>
                </button>
            </td>
        </tr>`;
  });
  document.getElementById("target").innerHTML = renderString;
}
fetch("http://localhost:3000/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    renderProducts(data);
  });
function xoa(id) {
  if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
      .then(() => {
        alert("Xóa sản phẩm thành công");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
