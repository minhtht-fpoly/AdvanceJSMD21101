function addProduct() {
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
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    window.location = "index.html";
  });
}
