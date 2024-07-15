document.getElementById("sbm").addEventListener("click", function (event) {
  event.preventDefault();
  registerUser();
});

const registerUser = async () => {
  let userName = document.getElementById("inp-username").value;
  let psw = document.getElementById("inp-password").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${userName}`,
      password: `${psw}`,
      expiresInMins: 30, // optional, defaults to 60
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};
