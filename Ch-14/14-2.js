// let student = {};

let images = [
  {
    src: "",
    name: "",
  },
  {
    src: "",
    name: "",
  },
  {
    src: "",
    name: "",
  },
  {
    src: "",
    name: "",
  },
];

// Array of object
let allStudents = [
  {
    id: 101,
    name: "Aman",
    per: 87.41,
  },
  {
    id: 102,
    name: "Aman",
    per: 87.41,
  },
  {
    id: 103,
    name: "Aman",
    per: 87.41,
  },
  {
    id: 104,
    name: "Aman",
    per: 87.41,
  },
];

function addStudent(id, name, per) {
  let stud = {
    id: id,
    name: name,
    per: per,
  };

  allStudents.push(stud);
}

addStudent(105, "Yash", 87.45);

allStudents.forEach((value, index) => {
  console.log("----------------------------");
  console.log("Student: " + (index + 1) + "/" + allStudents.length);
  console.log("Id: " + value.id);
  console.log("Name: " + value.name);
  console.log("Per: " + value.per);
});
