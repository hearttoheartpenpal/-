/* Prevent giant images */
img { max-width: 100%; height: auto; display: block; }

:root{
  /* EXACT Canva-ish blush */
  --bg: #fdeaf1;

  /* Dark mode: deep blackish rose */
  --bgDark: #1e0f17;

  --card: #ffffff;
  --cardDark: #2a1821;

  --text: #151515;
  --textDark: #f7eef3;

  --accent: #c40000;
  --accentDark: #ff5a86;

  --shadow: 0 22px 65px rgba(0,0,0,.14);
}

html[data-theme="light"] body{
  background: var(--bg);
  color: var(--text);
}

html[data-theme="dark"] body{
  background: var(--bgDark);
  color: var(--textDark);
}

*{ box-sizing: border-box; }

body{
  margin:0;
  font-family:"Poppins", system-ui, -apple-system, Arial, sans-serif;
}

/* Layout */
.page{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 42px 18px;
}

.card{
  position:relative;
  width: min(1040px, 92vw);
  aspect-ratio: 16 / 9;
  border-radius: 34px;
  box-shadow: var(--shadow);
  overflow:hidden;

  /* center content */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 60px 44px 58px;
}

html[data-theme="light"] .card{ background: var(--card); }
html[data-theme="dark"]  .card{ background: var(--cardDark); }

/* Lace frame image (this is why you must have assets/lace.png) */
.lace{
  position:absolute;
  inset: 24px;
  background: url("./assets/lace.png") center / 100% 100% no-repeat;
  pointer-events:none;
  z-index: 1;
}

/* Big envelope like Canva */
.envelope{
  width: clamp(240px, 22vw, 360px);
  z-index: 2;
  margin-top: -10px;
  margin-bottom: 10px;
}

/* Title bigger */
.title{
  margin: 0;
  z-index: 2;
  font-weight: 800;
  font-size: clamp(66px, 6.2vw, 102px);
  line-height: 1.02;
  text-align:center;
}

html[data-theme="light"] .title{ color: var(--accent); }
html[data-theme="dark"]  .title{ color: var(--accentDark); }

.subtitle{
  z-index: 2;
  margin-top: 10px;
  margin-bottom: 24px;
  font-weight: 800;
  font-size: clamp(22px, 2.2vw, 30px);
  opacity: .95;
  text-align:center;
}

/* Icon menu */
.menu{
  z-index: 2;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  gap: clamp(46px, 6vw, 100px);
  margin-top: 6px;
}

.menuItem{
  border: none;
  background: transparent;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 18px;
  transition: transform .18s ease;
}

.menuItem:hover{ transform: translateY(-4px); }

.menuItem img{
  width: clamp(62px, 6vw, 86px);
}

.menuLabel{
  font-weight: 800;
  font-size: 18px;
}

/* Top-left theme icon — NO grey square */
.themeBtn{
  position: fixed;
  top: 22px;
  left: 22px;
  z-index: 60;

  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor:pointer;

  appearance: none;
  -webkit-appearance: none;
  outline: none;
}

.themeBtn:focus{ outline:none; }

.themeBtn img{
  width: 72px;
  height:auto;
  background: transparent;
  border: none;
  box-shadow: none;
  transition: transform .15s ease;
}

.themeBtn:hover img{ transform: translateY(-2px); }

/* Games bottom-left (bounce) */
.gamesCorner{
  position:absolute;
  left: 30px;
  bottom: 24px;
  z-index: 3;

  border:none;
  background: transparent;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 6px;

  transition: transform .18s ease;
  transform-origin:center;
}

.gamesCorner:hover{ transform: translateY(-4px) scale(1.02); }
.gamesCorner:active{ transform: translateY(-2px) scale(0.98); }

.gamesCorner img{ width: 98px; }
.gamesLabel{ font-weight: 800; font-size: 18px; }

/* Info popup (About/Rules/Contact) */
.pop{
  position:absolute;
  z-index: 20;
  width: min(440px, 90vw);
  border-radius: 18px;
  box-shadow: 0 20px 55px rgba(0,0,0,.18);
  padding: 12px 12px 14px;
  display:none;
}

html[data-theme="light"] .pop{ background:#fff; color: var(--text); }
html[data-theme="dark"]  .pop{ background:#2b1a23; color: var(--textDark); }

.popTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
}

.popTitle{ font-weight: 800; }

.popX{
  border:none;
  border-radius: 12px;
  padding: 6px 10px;
  cursor:pointer;
  font-weight: 800;
}

html[data-theme="light"] .popX{ background: rgba(0,0,0,.06); color: var(--text); }
html[data-theme="dark"]  .popX{ background: rgba(255,255,255,.10); color: var(--textDark); }

.popBody{
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.45;
  opacity: .92;
}

.popArrow{
  position:absolute;
  bottom:-9px;
  width: 16px;
  height: 16px;
  background: inherit;
  transform: rotate(45deg);
}

/* Games Modal */
.overlay{
  position:fixed;
  inset:0;
  z-index: 80;
  display:none;
  align-items:center;
  justify-content:center;
  padding: 18px;
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(6px);
}

.modal{
  width:min(620px, 92vw);
  border-radius: 22px;
  box-shadow: 0 22px 70px rgba(0,0,0,.35);
  padding: 14px;
}

html[data-theme="light"] .modal{ background:#fff; color: var(--text); }
html[data-theme="dark"]  .modal{ background:#2b1a23; color: var(--textDark); }

.modalTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 6px 6px 10px;
}

.modalTitle{ font-weight: 800; }

.modalX{
  border:none;
  border-radius: 12px;
  padding: 6px 10px;
  cursor:pointer;
  font-weight: 800;
}

html[data-theme="light"] .modalX{ background: rgba(0,0,0,.06); color: var(--text); }
html[data-theme="dark"]  .modalX{ background: rgba(255,255,255,.10); color: var(--textDark); }

.modalGrid{
  display:grid;
  gap: 10px;
  padding: 6px;
}

.gameBtn{
  border-radius: 16px;
  padding: 12px 14px;
  font-weight: 800;
  cursor:pointer;
  background: transparent;
}

html[data-theme="light"] .gameBtn{ border: 1px solid rgba(0,0,0,.12); }
html[data-theme="dark"]  .gameBtn{ border: 1px solid rgba(255,255,255,.16); }

.modalNote{
  padding: 8px 6px 6px;
  opacity: .85;
  font-size: 13px;
}
