/*

    Ch-3: DataTypes and Variables:

    DataTypes:
        - Category of data.
        - To create a variable, to define the type of value in var.
        - int, String, double, boolean, BigInt
        - Array, Object, Date

        - Satically typed language  : define the data type.
        - Dynamically typed language: data types won't be defined.

    Variables:
        - Container which stores some value.
        - var, let and const
        - var:  
            - defines the variable globally.
            - to support the older browsers before 2015.
        - let:
            - defines the variable for specific scope.
            - supports dynamic value.
        - const:
            - defines the fixed variables.
            - values can't be replaced in the variable.


    // WAP to swap 2 numbers using 3rd variable.
    // WAP to swap 2 numbers without using 3rd variable.
    // WAP to swap 2 numbers without using 3rd variable or + & -.
*/
const a = "5" + 4 + 3;
const b = 5 + "4" + 3;
const c = 5 + 4 + "3";

console.log("Answer: ", a);
console.log("Answer: ", b);
console.log("Answer: ", c);
