/*

    Control Structure:

        - Conditional Statement:
            - if, else if, nested, ternory
        - Selectional Statement:
            - switch
        - Jumping Statements:
            - break, continue, return
        - Iterative Statements:
            - while, do while, for

    - Conditional Statement:
        - Conditional operator:     >,  <, >=, <=, ==, !=, ===
        - Range - Logical     :     &&, ||
*/

// If
function canVote() {
  let age = document.getElementById("inp").value;

  if (age >= 18) {
    document.getElementById("result").innerHTML = "You can vote !!";
  } else {
    document.getElementById("result").innerHTML = "You can't vote !!";
  }
}

// Ladder
function checkNum() {
  let n = document.getElementById("num").value;
  let msg = "Enter value first...";

  if (n > 0) {
    msg = "positive";
  } else if (n == 0) {
    msg = "nuteral";
  } else {
    msg = "negative";
  }

  document.getElementById("res-2").innerHTML = "Num is " + msg;
}

// Nested
function findMax() {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let c = document.getElementById("num3").value;

  let max;

  if (a > b) {
    if (a > c) {
      max = a;
    } else {
      max = c;
    }
  } else {
    if (b > c) {
      max = b;
    } else {
      max = c;
    }
  }

  document.getElementById("max").innerHTML = "Max: " + max;
}

// Range condition  - &&
function getGrade() {
  let marks = document.getElementById("marks").value;
  let msg;

  //A
  if (marks <= 100 && marks >= 81) {
    msg = "Congratulations you got <strong>A grade</strong>";
  }
  //B
  else if (marks <= 80 && marks >= 61) {
    msg = "You got <strong>B grade</strong>";
  }
  //C
  else if (marks <= 60 && marks >= 51) {
    msg = "<strong>C grade</strong>";
  }
  //D
  else if (marks <= 50 && marks >= 33) {
    msg = "You somehow managed to <em>PASS</em>";
  }
  //Fail
  else if (marks <= 32 && marks >= 0) {
    msg = "Better luck next time...";
  }
  //Out of range...
  else {
    msg = "We don't have any grade to measure your smartness...";
  }

  document.getElementById("grade").innerHTML = msg;
}
