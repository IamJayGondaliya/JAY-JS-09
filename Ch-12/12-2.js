/*
CRUD operation:
---------------

C   -   Create, Insert, Push, Unshift
R   -   Read, Fetch, Display
U   -   Update
D   -   Delete

*/

// Global
let myItems = Array("Smartphone", "Laptop", "TV");
let index = 0;
console.log(myItems);

// let v = myItems.pop();
// console.log(v + " is deleted...");

// let v = myItems.shift();
// console.log(v + " is deleted...");
// console.log(myItems);

// myItems.unshift("Fridge");
// console.log(myItems);

myItems.splice(1, 1, "Fridge"); // Insert / Update
// let a = myItems.flat();
console.log(myItems);
// console.log(a);

function loadItems() {
  let table = document.getElementById("table");

  for (let i = 0; i < myItems.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = myItems[i];

    tr.append(td);
    table.append(tr);
  }
}

function addItem() {
  let val = document.getElementById("inp-item").value;

  // Object
  let table = document.getElementById("table");

  // Create element
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  tr.id = val;
  tr.style.color = "red";

  td.innerHTML = val;
  td.id = "td" + val;

  tr.append(td);
  table.append(tr);
}

function removeItem() {
  let val = document.getElementById("rem-item").value;

  let row = document.getElementById(val);

  row.remove();
}

function updateItem() {
  let oldVal = document.getElementById("old-item").value;
  let newVal = document.getElementById("new-item").value;

  let row = document.getElementById(oldVal);
  row.id = newVal;

  let td = document.getElementById("td" + oldVal);

  td.innerHTML = newVal;
  td.id = "td" + newVal;
}
