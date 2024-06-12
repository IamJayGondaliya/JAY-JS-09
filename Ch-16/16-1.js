/*

    CSS:
    ----
    tag     =>  tagName
    id      =>  #id
    class   =>  .className

    document.querySelector('CSS');
        - will return the object which matches the CSS.
        - will return the first object from all the elements.

    document.querySelectorAll('CSS');
        - will return the List of objects which matches the CSS.

*/

// let p = document.querySelector("p");

// p.style.color = "red";

let allP = document.querySelectorAll("p");

// allP[allP.length - 1].style.color = "green";

for (let i = 0; i < allP.length; i++) {
  allP[i].style.color = "blue";

  allP[i].addEventListener("click", () => {
    allP[i].style.color = "red";
  });

  allP[i].addEventListener("dblclick", () => {
    allP[i].style.color = "blue";
  });

  //   allP[i].addEventListener("mouseenter", () => {
  //     allP[i].style.color = "yellow";
  //   });
  //   allP[i].addEventListener("mouseleave", () => {
  //     allP[i].style.color = "blue";
  //   });
}

window.addEventListener("blur", () => {
  document.querySelector("#res").innerHTML =
    "You changed on" + Date(Date.now());
});
window.addEventListener("focus", () => {
  document.querySelector("#res").innerHTML +=
    "<br>You came back on" + Date(Date.now());
});
