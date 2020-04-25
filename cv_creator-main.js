let nextButtons = document.getElementsByClassName("next");
let prevButtons = document.getElementsByClassName("prev");

console.log(nextButtons);

function findParentPageOnNext() {
  console.log("test");
  let parentPage = this.parentElement.parentElement;
  let parentPageId = parentPage.id;
  console.log(parentPageId);
  let parentPageNum = parseInt(parentPageId.substr(1));
  console.log(parentPageNum);
  let nextPageId = parentPageNum + 1;
  let nextPage = document.getElementById("s" + nextPageId);
  console.log(nextPage);

  parentPage.style.display = "none";
  nextPage.style.display = "block";
}

function findParentPageOnPrev() {
  console.log("test");
  let parentPage = this.parentElement.parentElement;
  let parentPageId = parentPage.id;
  console.log(parentPageId);
  let parentPageNum = parseInt(parentPageId.substr(1));
  console.log(parentPageNum);
  let prevPageId = parentPageNum - 1;
  let prevPage = document.getElementById("s" + prevPageId);
  console.log(prevPage);

  parentPage.style.display = "none";
  prevPage.style.display = "block";
}

for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", findParentPageOnNext);
}

for (let i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", findParentPageOnPrev);
}

// select  /////////////////////////////////////////////////////////////
let selectElement;
let createdDiv;

/*find any elements with the class "custom-select":*/
let customSelect = document.getElementsByClassName("custom-select");
for (i = 0; i < customSelect.length; i++) {
  selectElement = customSelect[i].getElementsByTagName("select")[0];
  console.log(selectElement);