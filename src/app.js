const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(username);
  //greeting.innerText = "hello " + username;
  greeting.innerText = `Hello!! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
