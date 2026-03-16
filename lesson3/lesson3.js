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
const data = [
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 15900000,
    category: "Điện thoại",
    stock: 8
  },
  {
    id: 3,
    name: "Tai nghe Sony WH-1000XM4",
    price: 6500000,
    category: "Phụ kiện",
    stock: 15
  },
  {
    id: 4,
    name: "Chuột Logitech G304",
    price: 850000,
    category: "Phụ kiện",
    stock: 25
  },
  {
    id: 5,
    name: "Bàn phím Keychron K6",
    price: 2200000,
    category: "Phụ kiện",
    stock: 10
  }
];
function render(){
    let renderString = ""
    for(let i = 0 ; i < data.length;i++){
        renderString = renderString + `<tr>
      <th scope="row">${i+1}</th>
      <td>${data[i].name}</td>
      <td>${data[i].price}</td>
      <td>${data[i].category}</td>
      <td>${data[i].stock}</td>
      <td><button>Xóa</button><button>Sửa</button></td>
    </tr>`
    console.log(renderString)
    }
    document.getElementById("target").innerHTML = renderString
}
render()
