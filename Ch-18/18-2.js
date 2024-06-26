/*
    - Digital clock
    - Analogue clock
    - Stop watch

*/

let m = 0;
let s = 0;

function print() {
  s++;
  console.log(`${m}:${s}`);
  if (s == 59) {
    m++;
    s = -1;
  }
  if (m == 2) {
    clearInterval(t);
  }
}

let t = setInterval(print, 100);
