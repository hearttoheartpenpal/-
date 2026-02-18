const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.src = theme === "dark" ? "./assets/moon.png" : "./assets/sun.png";
  themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  localStorage.setItem("h2h-theme", theme);
}

setTheme(localStorage.getItem("h2h-theme") || "light");

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
});

// Games placeholder popup
const gamesBtn = document.getElementById("gamesBtn");
const overlay = document.getElementById("overlay");
const modalX = document.getElementById("modalX");

gamesBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
});

modalX.addEventListener("click", () => {
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay){
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
  }
});
