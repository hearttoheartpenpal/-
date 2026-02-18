// ===== THEME (sun/moon) =====
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.src = theme === "dark" ? "./assets/moon.png" : "./assets/sun.png";
  localStorage.setItem("h2h-theme", theme);
}

setTheme(localStorage.getItem("h2h-theme") || "light");

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
});


// ===== ABOUT / RULES / CONTACT POPUP =====
const infoPop = document.getElementById("infoPop");
const popTitle = document.getElementById("popTitle");
const popBody = document.getElementById("popBody");
const popX = document.getElementById("popX");
const popArrow = document.getElementById("popArrow");

const CONTENT = {
  about: {
    title: "About",
    html: "Heart to Heart connects high school students and nursing home residents through meaningful handwritten letters."
  },
  rules: {
    title: "Rules",
    html: "Be kind and respectful. No sharing personal info. Keep letters appropriate and safe. Prompts can be provided."
  },
  contact: {
    title: "Contact",
    html: "Add your email / sign-up form link here."
  }
};

function openInfo(key, btnEl) {
  const data = CONTENT[key];
  if (!data) return;

  popTitle.textContent = data.title;
  popBody.innerHTML = data.html;

  infoPop.style.display = "block";
  infoPop.setAttribute("aria-hidden", "false");

  // Measure + position above clicked icon button
  const b = btnEl.getBoundingClientRect();
  const p = infoPop.getBoundingClientRect();

  const centerX = b.left + b.width / 2;
  let left = centerX - p.width / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - p.width - 12));

  const top = b.top - p.height - 14;

  infoPop.style.left = `${left + window.scrollX}px`;
  infoPop.style.top = `${Math.max(12, top + window.scrollY)}px`;

  // Arrow points to button center
  const arrowLeft = (centerX - left) - 8;
  popArrow.style.left = `${Math.max(18, Math.min(arrowLeft, p.width - 34))}px`;
}

function closeInfo() {
  infoPop.style.display = "none";
  infoPop.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".menuItem").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;

    // toggle off if already open with same title
    if (infoPop.style.display === "block" && popTitle.textContent.toLowerCase() === key) {
      closeInfo();
      return;
    }
    openInfo(key, btn);
  });
});

popX.addEventListener("click", closeInfo);

document.addEventListener("click", (e) => {
  const clickedMenu = e.target.closest(".menuItem");
  const clickedPop = e.target.closest("#infoPop");
  if (!clickedMenu && !clickedPop) closeInfo();
});

window.addEventListener("resize", closeInfo);


// ===== GAMES MODAL =====
const gamesBtn = document.getElementById("gamesBtn");
const overlay = document.getElementById("overlay");
const modalX = document.getElementById("modalX");

function openGames() {
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
}

function closeGames() {
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
}

gamesBtn.addEventListener("click", openGames);
modalX.addEventListener("click", closeGames);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeGames();
});
