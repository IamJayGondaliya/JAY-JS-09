/*
    POP:
        - Procedural oriented programming
        - Everything will have each saperate process (function)
        - Everything will be done by functions.
    OOP:
        - Object Oriented Programming.
        - Everything will be handled by object.
        - OOP is concept, by which code becomes well organized/structured, well secured and increases
          the code reusablity.

    2 Main Concept:
        - class
        - object

    Class:
        - Category of data.
        - User defined data type.
        - Class is a blueprint of any process.
        - Class is a collection of data memebers and data member functions.
    Object:
        - Instance(variable) of class.
        - The real life entity which represents the class.

    4 Pillars/Principles of OOP:
        - Encapsulation     =>      to combine/wrap
        - Inheritence       =>      to share
        - Polymorphism      =>      to behave in multiple way
        - Abstraction       =>      to secure

    this keyword:
        - instance of current class.
    new keyword:
        - defines the Object.

*/

class Animal {
  // Attributes
  name;
  type;

  // Constructor
  //   constructor() {}

  // Methods        - function
  setData(name, type) {
    this.name = name;
    this.type = type;
  }

  getData() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
  }
  // Events         - function  - User interactions

  // setter
  // getter

  // Static data
}

// Object
let dog = new Animal();

dog.setData("Shiro", "Demostic");

dog.getData();
