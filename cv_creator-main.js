let nextButtons = document.getElementsByClassName("next");
let prevButtons = document.getElementsByClassName("prev");

console.log(nextButtons);

function findParentPage() {
  console.log("test");
  let parentPage = this.parentElement.parentElement;
  let parentPageId = parentPage.id;
  console.log(parentPageId);
  let parentPageNum = parseInt(parentPageId.substr(1));
  console.log(parentPageNum);
}

for (let i = 0; i < nextButtons.length; i++) {
  console.log("test click");
  nextButtons[i].addEventListener("click", findParentPage);
}
