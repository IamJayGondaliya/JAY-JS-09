/*
    - TNRN
    - TSRN
    - TNRS
    - TSRS

    - Recursion:
        - function calls itself.
        - function - recursive function
        - it must be used with proper condition.

    - Task list
        - Loop
            - increment
            - decrement
        - Factorial
        - N Sum
        - Fibinacci series

        - calc by udf
*/

// Nested function
function loop() {
  let s = document.getElementById("start").value;
  let e = document.getElementById("end").value;

  repeat(s, e);
}

// Recursive function
function repeat(s, e) {
  let ans = document.getElementById("ans");

  ans.innerHTML += s + " ";
  s++;

  if (s <= e) {
    repeat(s, e);
  }
}

function calcButton(data) {
  let disp = document.getElementById("disp");
  let value = document.getElementById("disp").innerHTML;

  if (data == "=") {
    disp.innerHTML = eval(value);
  } else {
    disp.innerHTML += data;
  }
}
