var mail = JSON.parse(localStorage.getItem("email"));
var users = JSON.parse(localStorage.getItem("userdetail"));
var entry = localStorage.getItem("botentry") || "false";
users.forEach((ele) => {
  if (ele.email == mail) {
    document.getElementById("username").innerText = ele.name;
    document.getElementById("firstletter").innerText = ele.name[0];
  }
});
document.getElementById("email").innerText = mail;

function goTemp() {
  window.location.href = "chatbot-templates.html";
}
function goDash() {
  window.location.href = "dashboard.html";
}
document
  .getElementById("bots_create_bot")
  .addEventListener("click", function () {
    window.location.href = "chatbot-templates.html";
  });
function createbot() {
  window.location.href = "chatbot-templates.html";
}
function goAi() {
  window.location.href = "botAi.html";
}

if (entry == "true") {
  document.getElementById("botinfoappend").style.display = "flex";
  document.getElementById("offtext").style.display = "none";
  document.getElementById("bots_create_bot").style.display = "none";
}
