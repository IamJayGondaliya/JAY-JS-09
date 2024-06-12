function validateForm() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  //   Name validation
  if (name == null || name == "") {
    document.querySelector("#nameError").innerHTML = "Must enter name !!";
    document.querySelector("#nameError").style.color = "red";
  } else {
    document.querySelector("#nameError").innerHTML = "";
  }

  //   Email validation
  if (email == null || email == "") {
    document.querySelector("#emailError").innerHTML = "Must enter email !!";
    document.querySelector("#emailError").style.color = "red";
  } else {
    // RegEx
    // Regular Expressions  ->  Data format validator
    // Email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let reg =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let isEmail = reg.test(email);

    if (isEmail) {
      console.log("Valid email...");
      document.querySelector("#emailError").innerHTML = "";
    } else {
      console.log("Invalid email...");
      document.querySelector("#emailError").innerHTML =
        "Must enter a valid email !!";
      document.querySelector("#emailError").style.color = "red";
    }
  }
}
