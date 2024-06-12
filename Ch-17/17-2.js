/*
    Constructor:
        - It is a block of code which is automatically
          invoked(execute) when class is instantiated.
        - intantiate    =>  to create object.
        - it does the initial procedures of any class.

    Syntax:

        class ClassName {
            constructor([params]) {
                /-- CODE --/
            }
        }
    
    Rules:
        - it must be created with 'constructor' keyword.
        - it can't have another names.
        - it can't return any value.

    Types:
        - Default
        - Parameterized (Custom)

    Private attributes:
        - use '#' as prefix.
    Setter & Getter:
        - it must be created separately for each attribute
        - it can be created by set or get keywords.
        - each can target one attribute only at a time.

*/

class Emp {
  #id;
  #name;

  // Constuctor
  constructor(id, name) {
    // initial process
    console.log("Loading started... !!");
    this.#id = id;
    this.#name = name;
    console.log(`Employee ${this.#name} is hired with id: ${this.#id}`);
  }

  printData() {
    console.log(`Id: ${this.getId}`);
    console.log(`Name: ${this.getName}`);
  }

  // Setter
  set setId(id) {
    this.#id = id;
  }
  set setName(name) {
    this.#name = name;
  }

  // Getter
  get getId() {
    return this.#id;
  }
  get getName() {
    return this.#name;
  }
}

let e = new Emp(101, "Aman");

e.setName = "Man";

e.printData();

console.log(`Name of EMP: ${e.getName}`);
