const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  if(themeIcon) themeIcon.src = theme === "dark" ? "./assets/moon.png" : "./assets/sun.png";
  if(themeLabel) themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  localStorage.setItem("h2h-theme", theme);
}

setTheme(localStorage.getItem("h2h-theme") || "light");

if(themeBtn){
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(cur === "light" ? "dark" : "light");
  });
}


const aboutBtn = document.getElementById("aboutBtn");
const rulesBtn = document.getElementById("rulesBtn");
const contactBtn = document.getElementById("contactBtn");

if(aboutBtn){
  aboutBtn.addEventListener("click", () => {
    window.location.href = "./about.html";
  });
}

if(rulesBtn){
  rulesBtn.addEventListener("click", () => {
    window.location.href = "./rules.html";
  });
}

if(contactBtn){
  contactBtn.addEventListener("click", () => {
    window.location.href = "./contact.html";
  });
}
