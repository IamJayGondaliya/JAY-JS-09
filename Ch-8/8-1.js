/*
    Ch-8: Looping

        - What is loop?
            - to 'repeate' a specific 'block of code' until the given 'condition'
              isn't 'satisfied'.
        
        - Types of loop?
            - Entry control loop
                - while, for, for..in, for..of
            - Exit control loop
                - do while

        - Criterias:
            - initialization    =>  starting
            - condition         =>  ending
            - updation          =>  changes
*/

function loop() {
  let s = parseInt(document.getElementById("start").value);
  let e = parseInt(document.getElementById("end").value);
  let res = "";

  for (let i = s; i <= e; i++) {
    res += i + " ";
  }

  document.getElementById("res").innerHTML = res;
}

function reverse() {
  let num = parseInt(document.getElementById("num").value);

  let rem,
    rev = 0;

  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }

  document.getElementById("ans").innerHTML = rev;
}

function makePattern() {
  let n = parseInt(document.getElementById("num").value);
  let txt = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      txt += j + " ";
    }
    txt += "<br />";
  }

  document.getElementById("ans").innerHTML = txt;
}

function withSpace() {
  let n = parseInt(document.getElementById("num").value);
  let txt = "";

  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      txt += "_";
    }
    for (let j = 1; j <= i; j++) {
      txt += j;
    }
    txt += "<br />";
  }

  document.getElementById("ans").innerHTML = txt;
}
