//Khai báo biến
//const var let
//Lỏng lẻo
// var a = 7;
// var b = "Hello";
// //
// c = 8;
// alert(c);
// Phạm vi : const : Hằng số, let có thể thay đổi, var:
// Global scope (var) : Biến toàn cục là biến có thể truy xuất giá trị ghi trong biến ở ngoài block code biến thuộc về, có thể khai báo lại
// Block Scope ( let const) : Biến cục bộ : chỉ có thể truy xuất giá trị trong cùng 1 block code, không thể khai báo lại
// {
//   var a = 1;
//   var a = 2;
// }
// {
//   let b = 2;
//   b = 3;

//   c = 4;
// }

// console.log(a);
// console.log(b);
// console.log(c);
// const arr = [1, 2, 3];
// const arr1 = arr;
// arr.pop();

// console.log(arr, arr1);

//Mảng: thêm sửa xóa phần tử
// const students = ["Vi", "Long", "Hiển", 9, 8, 7, 6];
//Thêm :
// students.unshift("Minh");
//Xóa: pop(), shift()
//splice(bắt đầu từ đâu, Xóa bao nhiêu phần tử, .....Thêm vào những gì)
// console.log(students[-1]);
// students.splice(-1, 1);

// console.log(students);
const students = [
  "Nguyễn Văn Minh",
  "Trần Thị Lan",
  "Lê Hoàng Nam",
  "Phạm Thu Trang",
  "Đỗ Quang Huy",
];
const nameArr = [];
for (let i = 0; i < students.length; i++) {
  let ten = students[i].split(" ");
  nameArr.push(ten[ten.length - 1]);
}
nameArr.sort();
console.log(nameArr);
// console.log(students);
// console.log(ten.split(" "));

// Cho một mảng gồm 5 họ tên sinh viên sắp xếp lại mảng dựa theo tên của sinh viên theo bảng alphabet
// console.log(students.sort());
const arr = [1, 2, 3];
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);
console.log(arr);
students.sort(function(a,b))
