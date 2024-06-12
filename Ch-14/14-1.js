// Object   =>  Associative array.
// Collection of attributes(properties) and methods(functions).
// Custon data type.

// Variable
let a = 10;

let student = {
  //Attributes    =>  Variables   =>  Properties
  // key: value,
  id: 101,
  f_name: "Aman",
  l_name: "Singh",
  per: 85.41,
  //Methods       =>  Functions
  getGrade: () => {
    return this.per;
    /*--CALCULATIONS HERE--*/
    // let per = this.per;
    // console.log(this.id);
    // if (per <= 100 && per >= 80) {
    //   return "A";
    // } else if (per <= 79 && per >= 60) {
    //   return "B";
    // } else if (per <= 59 && per >= 40) {
    //   return "C";
    // } else if (per <= 39 && per >= 33) {
    //   return "D";
    // } else if (per <= 32 && per >= 0) {
    //   return "FAIL";
    // } else {
    //   return "UNDEFINED";
    // }
  },
  //SETTERS / GETTERS
  /*
        SETTER  => function which sets the value to attribute.
        GETTER  => function which helps to access value of attribute.
  */
  get grade() {
    /* -- CALCUATIONS --*/
    let per = this.per;
    if (per <= 100 && per >= 80) {
      return "A";
    } else if (per <= 79 && per >= 60) {
      return "B";
    } else if (per <= 59 && per >= 40) {
      return "C";
    } else if (per <= 39 && per >= 33) {
      return "D";
    } else if (per <= 32 && per >= 0) {
      return "FAIL";
    } else {
      return "UNDEFINED";
    }
  },
  set setName(name) {
    // this =>  instance/scope of current object
    this.name = name;
  },
};

// Create getter
Object.defineProperty(student, "fullname", {
  get: function () {
    return this.f_name + " " + this.l_name;
  },
});

// console.log(student);
// console.log("Id: " + student.id);
// console.log("Per: " + student.getGrade());
console.log("Full name: " + student.fullname);
console.log("Per: " + student.grade);
