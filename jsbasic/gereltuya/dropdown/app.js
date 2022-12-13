let delBtn = document.getElementById("btnDel");
let colorsItem = document.getElementById("selectItem");
let displaySee = document.getElementById("listItem");

function getDomList() {
  console.log(colorsItem.length);
  for (const element of colorsItem) {
    console.log(element.innerText);
  }
}

function deleteColor() {
  let selectIndex = colorsItem.selectedIndex;
  colorsItem.remove(selectIndex);
}

function getSelectValue() {
  let selectedValue = colorsItem.value;
  console.log("Selected: " + selectedValue);
}
getDomList();