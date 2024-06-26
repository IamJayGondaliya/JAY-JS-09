// let array = Array();
// window.localStorage.setItem("myArray", JSON.stringify(array));

function addData() {
  let data = JSON.parse(window.localStorage.getItem("myArray"));

  data.push("New Data");

  window.localStorage.setItem("myArray", JSON.stringify(data));
  console.log(window.localStorage.getItem("myArray"));
}
