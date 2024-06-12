/*
    Array:
        - Collection of multiple values.

    Orderred Array(Collection):
        - Which have integer index values.
    
    Associative Array(Object):
        - Which have named(String) index for the values.
        - JSON  -   JavaScript Object Notation.

    Array:
        - let my_arr = [val1, val2, ...];
        - let my_arr = Array(val1, val2, ...);
*/

// let my_arr = [1, 2, 3, 4, 5];
let my_arr = Array(1, 2, 3, 4, 5);

// for (let i = 0; i < my_arr.length; i++) {
//   console.log("a[" + i + "]: " + my_arr[i]);
// }

// ForEach: void    =>  Elements, index, array
// - Syntax:    my_arr.forEach((element,index) => process);
// - Only to do some process
// - Can't return any value.
my_arr.forEach((e, i) => console.log("a[" + i + "]: " + e));

// Map: []          =>  Element, Index, Array
// - Syntax:    let arr = my_arr.map((element,index) => process);
// - To do some process and create the new array
let sq = my_arr.map((e) => e * e);

let odd = sq.filter((e) => e % 2 == 1);
// - Syntax:    let arr = my_arr.filter((element) => condition);

console.log("Array: " + my_arr);
console.log("Square: " + sq);
console.log("Odd: " + odd);
console.log("3: " + my_arr.indexOf(3));
console.log("3: " + my_arr.findIndex((e) => e == 3));
console.log("Has 4: " + my_arr.includes(4));
// my_arr.every();
let isEven = odd.some((e) => e % 2 == 1);
console.log("IsEven: " + isEven);
