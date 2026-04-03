// console.log("Xin chào");
// console.log("Minh");
// console.log(a);
// console.log(b);
// var a = 8;
// setTimeout(() => {
//   console.log(1);
// }, 0);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 2000);
function getData(callback) {
  setTimeout(() => {
    var data = { ten: "Điện thoại", gia: 500000 };
    callback(data);
  }, 1500);
}
function printData(duLieu) {
  console.log(duLieu);
}
getData(printData);

// callback, promise, async await
const moneyStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    const posibility = Math.random();
    if (posibility > 0.5) {
      resolve("Lấy lại tiền thành công");
    } else {
      reject("Còn cái nịt");
    }
  }, 1800);
});
// moneyStatus
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function doiTien() {
  try {
    const money = await moneyStatus;
    console.log(money);
  } catch (error) {
    console.error(error);
  }
}
doiTien();
