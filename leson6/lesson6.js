// console.log(document.getElementById("target").firstElementChild);
const arr = ["Hoài", "Nghĩa", "Tín"];
let renderString = "";
for (let i = 0; i < arr.length; i++) {
  renderString = renderString + `<div class="border bColor">${arr[i]}</div>`;
}
console.log(renderString);
document.getElementById("render").innerHTML = renderString;
