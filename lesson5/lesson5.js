const data = [
  
  {
    id: 2,
    name: "iPhone 13",
    price: 900000,
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
  },
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12
  }
];
//forEach(): Nhận 1 callback, tham số của callback lần lượt là phẩn tử mảng, index của phẩn tử dó và mảng ban đầu, cứ mỗi lần lặp qua một phần tử thì forEach gọi callback 1 lần
data.forEach((arrayElements)=>{
    console.log(arrayElements.name)
})
//find(): trả về phần tử đầu tiên thỏa mãn điều kiện return của callback
const expensiveItem = data.find(e=> e.price > 1000000)
console.log(expensiveItem)
//filter(): trả về 1 mảng với tất cả các phần tử thỏa mẫn điều kiện return của callback
const phuKien = data.filter(e=> e.category == "Phụ kiện")
console.log(phuKien)