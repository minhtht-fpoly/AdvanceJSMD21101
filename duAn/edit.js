const params = new URLSearchParams(window.location.search);
const id = params.get("id");
alert(id);
//Fill dữ liệu cũ vào form
fetch(`http://localhost:3000/products/${id}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("name").value = data.name;
    document.getElementById("price").value = data.price;
    document.getElementById("category").value = data.category;
    document.getElementById("stock").value = data.stock;
  });

function editProduct() {
  const tenSP = document.getElementById("name").value;
  const giaSP = document.getElementById("price").value;
  const danhMucSP = document.getElementById("category").value;
  const soLuongSP = document.getElementById("stock").value;
  const data = {
    name: tenSP,
    price: giaSP,
    catrgory: danhMucSP,
    stock: soLuongSP,
  };
  fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location = "index.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
