const MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
const loginForm = document.getElementById("loginForm");
const regForm = document.getElementById("regForm");
const indicator = document.getElementById("indicator");

function register() {
  loginForm.style.visibility = "hidden";
  regForm.style.visibility = "visible";
  indicator.style.transform = "translateX(100px)";
}
function login() {
  regForm.style.visibility = "hidden";
  loginForm.style.visibility = "visible";
  indicator.style.transform = "translateX(0px)";
}
