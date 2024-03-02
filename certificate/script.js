const users = {
  name: "admin",
  key: "222666"
};
const loginText = document.querySelector("#login h1");
const loginBox = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
function userLogin() {
  if (username.value == "" || password.value == "") {
    username.style.borderColor = "orange";
    password.style.borderColor = "orange";
    loginText.innerHTML = "Fields are Empty"
  } else if(username.value != users.name && password.value != users.key){
    username.style.borderColor = "crimson";
    password.style.borderColor = "crimson";
    loginText.innerHTML = "Incorrect Details"
  } else{
    alert("Login Successful ")
    loginBox.style.display = "none";
  }
}