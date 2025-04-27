let currentLang = 'eng';

function toggleLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang').forEach(el => el.classList.remove('show'));
  document.querySelectorAll(`.${lang}`).forEach(el => el.classList.add('show'));
}

// Show only one section at a time
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  toggleLanguage(currentLang); // Apply language to new section
}

// Initialize default language and section
window.onload = function () {
  showSection('home');
  toggleLanguage('eng');
}
function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = src;
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
