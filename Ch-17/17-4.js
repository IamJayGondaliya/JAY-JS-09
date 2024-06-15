/*
        Polymorphism:
            - To behave in multiple way.
            - Poly      : Multiple / Many.
            - Morphs    : Structure / Behaviour / Forms.

            - Types:
                - Compile time:
                    - Method overloading
                    - Operator overloading
                    - Constructor overloading
                - Run time:
                    - Method overriding

            - Method overriding:
                - Re defining the method with same signature(name, params, returType) in child class.

        Abstraction:
            - To restrict to use some implementations.
            - Hide the methods and class itself.
            - Abs       : Draw
            - Trehere   : Away
            - Draw away : push back, restrict

            1. Use private attributes and methods:
                - use '#' as prefix.
            2. Use of abstract class:
                - Abstract class:
                    - a class which can't be instantiated.
                    - we can't create an object of class.
                    - we have to inherit the abstract class.
*/

class Dominoz {
  constructor() {
    if (this.constructor == Dominoz) {
      throw new Error(
        "You can't contact the Dominoz directly...\nKindly contact the supplier."
      );
    }
  }

  pizza() {
    console.log("You have ordered pizza...");
  }
}

class Lapinoz extends Dominoz {
  // Method overriding
  pizza() {
    console.log("------- Lapinoz -------");
    super.pizza();
  }
}

let l = new Lapinoz();

l.pizza();
