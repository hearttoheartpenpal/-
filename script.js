const buttons = document.querySelectorAll(".iconBtn");
const infoBox = document.getElementById("infoBox");
const infoTitle = document.getElementById("infoTitle");
const infoContent = document.getElementById("infoContent");
const closeInfo = document.getElementById("closeInfo");

const gamesBtn = document.getElementById("gamesBtn");
const gamesModal = document.getElementById("gamesModal");
const closeGames = document.getElementById("closeGames");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const type = btn.dataset.type;

    infoTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    infoContent.innerHTML = "Content for " + type;

    const rect = btn.getBoundingClientRect();
    infoBox.style.top = rect.top - 120 + "px";
    infoBox.style.left = rect.left + "px";
    infoBox.style.display = "block";
  });
});

closeInfo.addEventListener("click", ()=>{
  infoBox.style.display = "none";
});

gamesBtn.addEventListener("click", ()=>{
  gamesModal.style.display = "flex";
});

closeGames.addEventListener("click", ()=>{
  gamesModal.style.display = "none";
});

themeToggle.addEventListener("click", ()=>{
  if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    themeIcon.src = "./assets/Star.png";
  } else {
    document.body.classList.add("dark");
    themeIcon.src = "./assets/moon.tiff";
  }
});
