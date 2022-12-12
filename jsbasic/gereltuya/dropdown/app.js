let domList = document.getElementsByTagName("option");
let delBtn = document.getElementById("btn");

function getDomList() {
  console.log(domList.length);
  for (const element of domList) {
    console.log(element.innerText);
  }
}

function selectedItemDelete(){
    const localDomList = document.getElementsByTagName("option");
    const index = localDomList.selectedIndex;
    console.log(index);
    
}

function selectItemOption(){
    let test = domList.selected;
    console.log(test);
}

domList.addEventListener("select", selectItemOption, false);
delBtn.addEventListener("click", selectedItemDelete, false);

// getDomList();
