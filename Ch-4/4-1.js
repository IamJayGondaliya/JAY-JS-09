/*
    What is operator?
        - Operators are the symbols which helps to perform mathematical
          or logical operations on operands.
    What is operand?
        - It can be either value or variable.
        - it decides the type of operator.

    Types of operator:

        - Unary         (single operand)
            - increment (++)
            - decrement (--)
        - Binary
            - arithmatic:   +, -, *, /, %, ** (Expontiation - power)
            - assignment:   =, +=, -=, *=, /=, %=, **=
            - comparison /
              conditional /
              relational:   >, <, >=, <=, ==, !=, ===
            - logical:      &&, ||, !
        - Ternory:
            - ternory:      ?:

            - condition
                    ? TRUE
                    : FALSE;
*/

let a = 100;
let b = 70;

let max = a > b ? a : b;

console.log("Answer: ", max);
