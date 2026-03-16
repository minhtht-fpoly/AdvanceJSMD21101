// document.querySelector("#target").className = "border backGround"
// document.querySelector("#target2").classList.add("border","backGround")
// document.querySelector("#target2").classList.remove("border")
// document.querySelector("#target2").classList.toggle("backGround")
// document.querySelector("#target").innerHTML = "<div>Test text 1</div>"
// const newDiv = document.createElement("div")
// newDiv.innerHTML = "<div>Test text 1</div>"
// document.querySelector("#target").appendChild(newDiv)
// document.querySelector("#target2").innerText = "<div>Test text 2</div>"
// document.querySelector("#target").insertAdjacentHTML("beforeend","<div>Thẻ út</div>")
// document.querySelector("#target").insertAdjacentHTML("afterbegin","<div>Thẻ cả</div>")
// document.querySelector("#target").insertAdjacentHTML("beforebegin","<div>Thẻ anh</div>")
// document.querySelector("#target").insertAdjacentHTML("afterend","<div>Thẻ em</div>")
// const newClone =document.querySelector("#target").cloneNode(false)
// newClone.id = "newClone"
// console.log(newClone)
const staticNodes = document.querySelectorAll(".group1")
const liveNodes = document.getElementsByClassName("group1")
const newNode = document.createElement("div")
newNode.className = "group1"
document.querySelector("#target").appendChild(newNode)

console.log(staticNodes,liveNodes)

