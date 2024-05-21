function getInt(id) {
  return parseInt(document.getElementById(id).value);
}

function isPrime() {
  let n = getInt("num");

  let count = 0;
  let msg = "";

  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  msg = count == 1 ? "Prime number" : "Not prime number";

  document.getElementById("ans").innerHTML = msg;
}

function palindrome() {
  let n = parseInt(document.getElementById("num").value);
  let res = "",
    i,
    rem,
    rev = 0,
    a1,
    a2;
  for (i = 1; i <= n; i++) {
    a1 = i;
    a2 = i;
    rev = 0;
    while (a1 != 0) {
      rem = parseInt(a1 % 10);
      rev = parseInt(rev * 10 + rem);
      a1 = parseInt(a1 / 10);
    }
    if (rev == a2) {
      res += a2 + "<br />";
    }
    console.log("Cycle: " + i);
    console.log("Reverse: " + rev);
    console.log("A1: " + a1);
    console.log("A2: " + a2);
  }

  // Print all data
  document.getElementById("ans").innerHTML = res;
}
