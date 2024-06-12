/*
    Arrow functions:

    Syntax:
    const funName = (<args>) => value/statement;

    - Single line statement.
*/

const sum = (a, b) => console.log("Sum: " + (a + b));
const getSum = (a, b) => a + b;
const doSum = () => {
  let a = 50;
  let b = 46;
  console.log("Sum: " + (a + b));
};

// N sum
/*
    N = 5;
    5 + 4 + 3 + 2 + 1 = 15;
    5 + sum(4)              =>  n + sum(n-1)
        4 + sum(3)
            3 + sum(2)
                2 + sum(1)
                    1 + 0   =>  1
*/
const nSum = (n) => (n == 1 ? 1 : n + nSum(n - 1));

function getNSum() {
  // Get value
  let value = parseInt(document.getElementById("num").value);

  // Sum
  let sum = nSum(value);

  // Put value
  document.getElementById("n-sum").innerHTML = "Sum: " + sum;

  console.log("Current object: " + this);
}

// N fact
/*
    N = 5;
    5 * 4 * 3 * 2 * 1 = 120;    
    5 * fact(4)                 =>  n * fact(n-1)
        4 * fact(3)
            3 * fact(2)
                2 * fact(1)
                    1           =>  1
*/
const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));

console.log("N Sum: " + nSum(5));
console.log("N Fact: " + fact(5));
