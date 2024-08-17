// Corrected key name
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme');

const enableDarkmode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem('darkmode', 'active'); // Consistent key name
}

const disableDarkmode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem('darkmode', 'inactive'); // Use 'inactive' instead of null
}

// Check initial state and apply dark mode if necessary
if(darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode'); // Get current state again
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
