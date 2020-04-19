let nextButtons = document.getElementsByClassName("next");
let prevButtons = document.getElementsByClassName("prev");

console.log(nextButtons);

function findParentPage() {
  console.log("test");
}

// for (let i = 0; i < nextButtons.length; i++) {
//   console.log("test click");
//   nextButtons[i].addEventListener("click", findParentPage());
// }

// document.querySelectorAll(".next").forEach((item) => {
//   item.addEventListener("click", findParentPage());
// });

for (let i = 0; nextButtons.length; i++) {
  let button = this;
  console.log(button);
  button.addEventListener("click", findParentPage);
}

// nextButtons.forEach(function (elem) {
//   elem.addEventListener("click", function () {
//     console.log("test");
//   });
// });
