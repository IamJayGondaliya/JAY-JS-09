// Timing functions:
/*
    1. TimeOut
        - occures single time only.
        1. setTimeOut(
                function,
                milliseconds,
           );
        2. clearTimeout(timeoutVarId);
    2. Interval
        - occures repeatedly.
        1. setInterval(
                function,
                milliseconds,
           );
        2. clearInterval(intervalVarId);
*/

function print() {
  console.log("Hello...");
}
function printNew() {
  console.log("World...");
}

let h = setTimeout(print, 1000);
let w = setTimeout(printNew, 2000);

clearTimeout(h);

function showAlert() {
  alert("You've to login...");
}

let a = setTimeout(showAlert, 3000);
clearTimeout(a);

function loadData() {
  document.write("Hello there....");
}

let load = setTimeout(loadData, 2000);
