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
let createdDivSelect;
let createdDivOption;
let createdDivOptionList;

/*find any elements with the class "custom-select":*/
let customSelect = document.getElementsByClassName("custom-select");
for (let i = 0; i < customSelect.length; i++) {
  selectElement = customSelect[i].getElementsByTagName("select")[0];
  console.log(selectElement);

  // create new fake DIV with atributes
  createdDivSelect = document.createElement("div");
  createdDivSelect.setAttribute("class", "select-selected");
  // find text in old select
  createdDivSelect.innerHTML =
    selectElement.options[selectElement.selectedIndex].innerHTML;
  // put new DIv in place old hidden select
  customSelect[i].appendChild(createdDivSelect);

  console.log(createdDivSelect.innerHTML);

  // create new fake option list with atributes
  createdDivOption = document.createElement("div");
  createdDivOption.setAttribute("class", "select-items select-hide");

  for (let j = 0; j < selectElement.length; j++) {
    // for each option in old select, create new list of options
    createdDivOptionList = document.createElement("div");
    createdDivOptionList.innerHTML = selectElement.options[j].innerHTML;
    createdDivOptionList.addEventListener("click", function (e) {
      // when you click on elelement from list, change text in select
      var y, k;
      let s = this.parentNode.parentNode.getElementsByTagName("select")[0];

      let h = this.parentNode.previousSibling;

      for (let i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (let k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    createdDivOption.appendChild(createdDivOptionList);
  }
  customSelect[i].appendChild(createdDivOption);

  createdDivSelect.addEventListener("click", function (e) {
    /* when select is click - close others options and open this one:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
except the current select box:*/
  var y,
    arrNo = [];
  let selectItems = document.getElementsByClassName("select-items");
  let selectSelected = document.getElementsByClassName("select-selected");
  for (let i = 0; i < selectSelected.length; i++) {
    if (elmnt == selectSelected[i]) {
      arrNo.push(i);
    } else {
      // remove class to show arrow
      selectSelected[i].classList.remove("select-arrow-active");
    }
  }
  for (let i = 0; i < selectItems.length; i++) {
    if (arrNo.indexOf(i)) {
      // add class to hide
      selectItems[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
