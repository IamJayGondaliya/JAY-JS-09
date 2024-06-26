let data = JSON.parse(window.localStorage.getItem("data")) || [];
let isUpdating = false;
let upd_index;

function addData() {
  if (isUpdating) {
    update();
  } else {
    let id = document.getElementById("inp-id").value;
    let name = document.getElementById("inp-name").value;
    let age = document.getElementById("inp-age").value;

    data.push({
      id: id,
      name: name,
      age: age,
    });
  }

  console.log(`Data: ${data}`);
  window.localStorage.setItem("data", JSON.stringify(data));

  displayData();
}

function displayData() {
  let dataTable = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];

  data = JSON.parse(window.localStorage.getItem("data")) || [];

  dataTable.innerHTML = "";

  data.forEach((element, index) => {
    let row = document.createElement("tr");

    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdUpd = document.createElement("td");
    let tdDlt = document.createElement("td");

    tdId.innerHTML = element.id;
    tdName.innerHTML = element.name;
    tdAge.innerHTML = element.age;

    tdUpd.innerHTML = `<input 
            type="button" 
            value="UPDATE"
            onclick="updateData(${index})"
        />`;
    tdDlt.innerHTML = `<input 
            type="button" 
            value="DELETE"
            onclick="deleteData(${index})"
        />`;

    row.append(tdId);
    row.append(tdName);
    row.append(tdAge);
    row.append(tdUpd);
    row.append(tdDlt);

    dataTable.append(row);
  });
}

displayData();

function deleteData(index) {
  data = JSON.parse(window.localStorage.getItem("data")) || [];

  data.splice(index, 1);
  window.localStorage.setItem("data", JSON.stringify(data));

  displayData();
}

function updateData(index) {
  isUpdating = true;
  upd_index = index;
  let sbm = document.getElementById("sbm");
  sbm.value = "UPDATE";

  let inpId = document.getElementById("inp-id");
  let inpName = document.getElementById("inp-name");
  let inpAge = document.getElementById("inp-age");

  inpId.value = data[index].id;
  inpName.value = data[index].name;
  inpAge.value = data[index].age;
}

function update() {
  let inpId = document.getElementById("inp-id");
  let inpName = document.getElementById("inp-name");
  let inpAge = document.getElementById("inp-age");

  data[index.value] = {
    id: inpId.value,
    name: inpName.value,
    age: inpAge.value,
  };

  let sbm = document.getElementById("sbm");
  sbm.value = "SUBMIT";
}
