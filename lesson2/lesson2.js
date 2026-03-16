//Hàm
//Không chạy khi được khai báo mà chạy khi được gọi
//Biến được khai báo trong hàm thì không thể truy xuất ngoài hàm
// let data = {};
// //Declairation function
// function logIn() {
//   data = { ten: "Minh" };
// }
// function greeting() {
//   alert("Chào mừng trở lại" + data.ten);
// }
// logIn();
// greeting();
//Hàm biểu thức ( hàm ẩn danh)
// const greeting = function () {
//   alert("Xin chào");
// };
// greeting();
//Hàm mũi tên
// const greeting = () => {
//   alert("Xin chào");
// };
// greeting();
//Hay dùng để làm callback cho cách hàm khác
//IIFE
// (() => {
//   alert("Hello");
// })();
//Hàm có tham số
//Hàm có tham số truyền vào và giá trị của tham số sẽ được quyết định bởi đối số truyền vào khi gọi hàm
// function add(a, b) {
//   alert(a - b);
// }
// add(3, 4);
// const data = {
//   ten: "Minh",
//   ho: "Trần",
// };
// function greet(hoTen, tuoi) {
//   alert(`Xin chào ${hoTen.ho} ${hoTen.ten} ${tuoi}`);
// }
// greet(data, 16);

// function logIn(callback) {
//   data = { ten: "Vip15" };
//   callback(data);
// }
// function greeting(data) {
//   alert(`Chào mừng ${data.ten} đã đăng nhập game`);
// }
// logIn(greeting);

function greeting(ten = "user09809765") {
  alert("Xin chào " + ten);
}
greeting();
