//

// const divs = document.querySelectorAll("div");
// console.log(divs);
// document.getElementById("target").id = "changedId";
// console.log(document);
// for (let i = 0; i < divs.length; i++) {
//   divs[i].style.backgroundColor = "red";
// }
//
// console.log(document.getElementById("target").firstChild);
// const newElement = document.createElement("div")
// newElement.innerHTML = "Đây là thẻ được tạo bởi JS"
// console.log(newElement)
// document.getElementById("target").appendChild(newElement)
// document.getElementById("target").innerHTML = "<div>Đây là text tạo bởi JS</div>"
const productInfo = [
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12,
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 15900000,
    category: "Điện thoại",
    stock: 8,
  },
  {
    id: 3,
    name: "Tai nghe Sony WH-1000XM4",
    price: 6500000,
    category: "Phụ kiện",
    stock: 15,
  },
  {
    id: 4,
    name: "Chuột Logitech G304",
    price: 850000,
    category: "Phụ kiện",
    stock: 25,
  },
  {
    id: 5,
    name: "Bàn phím Keychron K6",
    price: 2200000,
    category: "Phụ kiện",
    stock: 10,
  },

  {
    id: 6,
    name: "Laptop HP Pavilion 14",
    price: 17500000,
    category: "Laptop",
    stock: 9,
  },
  {
    id: 7,
    name: "MacBook Air M1",
    price: 21000000,
    category: "Laptop",
    stock: 6,
  },
  {
    id: 8,
    name: "Samsung Galaxy S21",
    price: 14000000,
    category: "Điện thoại",
    stock: 11,
  },
  {
    id: 9,
    name: "Xiaomi Redmi Note 12",
    price: 5500000,
    category: "Điện thoại",
    stock: 20,
  },
  {
    id: 10,
    name: "Oppo Reno8",
    price: 8900000,
    category: "Điện thoại",
    stock: 7,
  },

  {
    id: 11,
    name: "Tai nghe AirPods Pro",
    price: 5200000,
    category: "Phụ kiện",
    stock: 13,
  },
  {
    id: 12,
    name: "Loa JBL Flip 5",
    price: 2900000,
    category: "Phụ kiện",
    stock: 18,
  },
  {
    id: 13,
    name: "Chuột Razer DeathAdder",
    price: 1200000,
    category: "Phụ kiện",
    stock: 14,
  },
  {
    id: 14,
    name: "Bàn phím Logitech K380",
    price: 750000,
    category: "Phụ kiện",
    stock: 30,
  },
  {
    id: 15,
    name: "Màn hình Dell 24 inch",
    price: 4200000,
    category: "Phụ kiện",
    stock: 5,
  },

  {
    id: 16,
    name: "Laptop Asus TUF Gaming",
    price: 22500000,
    category: "Laptop",
    stock: 4,
  },
  {
    id: 17,
    name: "iPhone 14 Pro",
    price: 26000000,
    category: "Điện thoại",
    stock: 3,
  },
  {
    id: 18,
    name: "Samsung Galaxy Z Flip 5",
    price: 24000000,
    category: "Điện thoại",
    stock: 6,
  },
  {
    id: 19,
    name: "Tai nghe Bluetooth Anker",
    price: 900000,
    category: "Phụ kiện",
    stock: 22,
  },
  {
    id: 20,
    name: "Sạc dự phòng Xiaomi 20000mAh",
    price: 650000,
    category: "Phụ kiện",
    stock: 27,
  },
];
let id;
//Với những sản phẩm có stock <10 thì bôi đỏ bg stock, < 20 thì để mau vàng
function render(data) {
  let renderString = "";

  for (let i = 0; i < productInfo.length; i++) {
    renderString += `
        <tr class="align-middle text-center">
            <th scope="row">${i + 1}</th>
            <td class="text-start">${productInfo[i].name}</td>
            <td class="text-danger fw-bold">${productInfo[i].price.toLocaleString()} đ</td>
            <td>
                <span class="badge bg-info text-dark">${productInfo[i].category}</span>
            </td>
            <td>
                <span class="badge ${productInfo[i].stock > 20 ? "bg-success" : productInfo[i].stock > 10 ? "bg-warning" : "bg-danger"}">
                    ${productInfo[i].stock}
                </span>
            </td>
            <td>
                <button onclick="xoa(${i})" class="btn btn-danger btn-sm me-2">
                    Xóa
                </button>
                <button class="btn btn-warning btn-sm" onclick="sua(${i})">
                    Sửa
                </button>
            </td>
        </tr>`;
  }

  document.getElementById("target").innerHTML = renderString;
}
render(productInfo);
function xoa(i) {
  if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    data.splice(i, 1);
  }
  render();
}
function addProduct(e) {
  e.preventDefault();
  const tenSP = document.querySelector("#tenSP").value;
  const giaSP = document.querySelector("#giaSP").value;
  const danhMucSP = document.querySelector("#danhMucSP").value;
  const soLuongSP = document.querySelector("#soLuongSP").value;
  data.push({
    name: tenSP,
    price: giaSP,
    category: danhMucSP,
    stock: soLuongSP,
  });
  render();
}
function filterProduct() {
  let filterName = document.getElementById("nameFilter").value || " ";
  let filterMinPrice = document.getElementById("minPriceFilter").value || 1;
  let filterMaxPrice =
    document.getElementById("maxPriceFilter").value || 9999999999999;
  const filteredProducts = productInfo.filter((product) => {
    return (
      product.name.toLowerCase().includes(filterName).toLowerCase() &&
      product.price >= filterMinPrice &&
      product.price <= filterMaxPrice
    );
  });
  render(filteredProducts);
}
function sua(i) {
  //Lấy dữ liệu từ mảng điền vào form
  document.getElementById("suaTenSP").value = productInfo[i].name;
  document.getElementById("suaGiaSP").value = productInfo[i].price;
  document.getElementById("suaDanhMucSP").value = productInfo[i].category;
  document.getElementById("suaSoLuongSP").value = productInfo[i].stock;
  id = i;
}
function editProduct(e) {
  e.preventDefault();
  let editInfo = {
    name: document.getElementById("suaTenSP").value,
    price: document.getElementById("suaGiaSP").value,
    category: document.getElementById("suaDanhMucSP").value,
    stock: document.getElementById("suaSoLuongSP").value,
  };
  productInfo.splice(id, 1, editInfo);
  render();
}
