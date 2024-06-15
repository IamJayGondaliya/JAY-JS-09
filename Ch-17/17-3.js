/*
        Inheritence:
            - to share the class data(data members & member functions) in another class.
            - Parent class:
                - A class which shares the data.
            - Child class:
                - A class which inherits the data.

            - Parent class  ||  Base class      ||  Super class
            - Child class   ||  Derived class   ||  Sub class

            - Types:
                - Single / Simple
                - Multilevel
                - Hierarchical
                - Multiple
                - Hybrid

        Inheritence in JS:
            - classes can be inherited using 'extends' keyword
            - a class can inherit single class only at a time in js.
        
            - Types:
                - Single
                - Multilevel
                - Hierarchical

            - super keyword:
                - super is an instance of parent class.
                - can be used in child class only.
                - it is an object of parent class.

*/

class A {
  #a;

  constructor(a) {
    this.#a = a;
  }

  set setA(a) {
    this.#a = a;
  }

  get getA() {
    return this.#a;
  }
}

class B extends A {
  #b;

  constructor(a, b) {
    super(a);
    this.#b = b;
  }

  set setB(b) {
    this.#b = b;
  }

  get getB() {
    return this.#b;
  }

  printSum() {
    console.log(`Sum: ${super.getA + this.#b}`);
  }
}

let b = new B(11, 22);

b.printSum();
