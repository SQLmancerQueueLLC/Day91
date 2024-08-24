function CreateSheet(sheetName) {
  objSheet.Name = sheetName;
  SaveSheet(objSheet);
  console.log(objSheet);
}
function SaveSheet(objSheet) {
  localStorage.setItem(objSheet.Name, JSON.stringify(objSheet));
}
function GetSheets(el) {
  if (localStorage.length > 0) {
    el.innerHTML = "";
    for (let x = 0; x < localStorage.length; x++) {
      el.innerHTML = el.innerHTML + localStorage.key(x) + "<BR>";
    }
  }
  console.log(el)
}

function CreateFragment(obj) {
console.log("CreateFragment")
}

function CreateSection(name, obj) {
  console.log("CreateSection")
}
