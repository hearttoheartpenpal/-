// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  if(themeIcon) themeIcon.src = theme === "dark" ? "./assets/moon.png" : "./assets/sun.png";
  if(themeLabel) themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  localStorage.setItem("h2h-theme", theme);
}

// Load saved theme
setTheme(localStorage.getItem("h2h-theme") || "light");

// Toggle theme on click
if(themeBtn){
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  });
}
