class Student {
  #id;
  #name;
  #per;
  static idCounter;
  static schoolName = "GSEB";

  static setFirstId(id) {
    Student.idCounter = id;
  }

  static changeSchool(schoolName) {
    Student.schoolName = schoolName;
  }

  constructor(name, per) {
    this.#id = Student.idCounter++;
    this.#name = name;
    this.#per = per;
  }

  print() {
    console.log(`Id\t: ${this.#id}`);
    console.log(`Name\t: ${this.#name}`);
    console.log(`Per\t: ${this.#per}`);
    console.log(`School\t: ${Student.schoolName}`);
  }

  set setName(name) {
    this.#name = name;
  }
}

Student.setFirstId(201);

let s1 = new Student("Aman", 78.51);
let s2 = new Student("Akbar", 85.51);
let s3 = new Student("Anthony", 75.51);

s2.setName = "Nayan";

Student.changeSchool("HSC");

s1.print();
s2.print();
s3.print();
