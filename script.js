// THEME
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.src = theme === "dark" ? "./assets/moon.png" : "./assets/sun.png";
  localStorage.setItem("h2h-theme", theme);
}

setTheme(localStorage.getItem("h2h-theme") || "light");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
});


// POPOVER (above clicked icon)
const popover = document.getElementById("popover");
const popTitle = document.getElementById("popTitle");
const popBody = document.getElementById("popBody");
const popClose = document.getElementById("popClose");
const popArrow = document.getElementById("popArrow");

const PANEL = {
  about: {
    title: "About",
    html: "Heart to Heart connects high school students and nursing home residents through meaningful handwritten letters."
  },
  rules: {
    title: "Rules",
    html: "Be kind and respectful. No sharing personal contact info. Keep letters appropriate and safe. Prompts will be provided."
  },
  contact: {
    title: "Contact",
    html: "Add your contact info here (email / form link)."
  }
};

function openPopover(key, btnEl) {
  const data = PANEL[key];
  if (!data) return;

  popTitle.textContent = data.title;
  popBody.innerHTML = data.html;

  // show to measure
  popover.style.display = "block";
  popover.setAttribute("aria-hidden", "false");

  const btnRect = btnEl.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();

  // position above the clicked button
  const centerX = btnRect.left + btnRect.width / 2;
  let left = centerX - popRect.width / 2;
  const top = btnRect.top - popRect.height - 14;

  // clamp to viewport
  left = Math.max(12, Math.min(left, window.innerWidth - popRect.width - 12));

  popover.style.left = `${left + window.scrollX}px`;
  popover.style.top = `${Math.max(12, top + window.scrollY)}px`;

  // arrow points to button center
  const arrowLeft = (centerX - (left)) - 8; // 8 = half arrow size
  popArrow.style.left = `${Math.max(18, Math.min(arrowLeft, popRect.width - 34))}px`;
}

function closePopover() {
  popover.style.display = "none";
  popover.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".menuItem").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.panel;
    // toggle off if same is open
    if (popover.style.display === "block" && popTitle.textContent.toLowerCase() === key) {
      closePopover();
      return;
    }
    openPopover(key, btn);
  });
});

popClose.addEventListener("click", closePopover);

document.addEventListener("click", (e) => {
  const clickedMenu = e.target.closest(".menuItem");
  const clickedPop = e.target.closest("#popover");
  if (!clickedMenu && !clickedPop) closePopover();
});

window.addEventListener("resize", () => {
  // close on resize to avoid weirdness
  closePopover();
});


// GAMES MODAL
const gamesBtn = document.getElementById("gamesBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const gameArea = document.getElementById("gameArea");

gamesBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  modalOverlay.setAttribute("aria-hidden", "false");
});

modalClose.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  modalOverlay.setAttribute("aria-hidden", "true");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
    modalOverlay.setAttribute("aria-hidden", "true");
  }
});

document.querySelectorAll(".gameBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const game = btn.dataset.game;
    if (game === "ttt") gameArea.textContent = "Tic Tac Toe coming next 💗";
    if (game === "rps") gameArea.textContent = "Rock Paper Scissors coming next 💗";
    if (game === "more") gameArea.textContent = "More games soon 💗";
  });
});
