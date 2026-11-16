
// Get HTML Elements
const theme = document.getElementById("themeSelect");
const message = document.getElementById("message");

// Apply Theme
function applyTheme(value) {
    document.body.classList.toggle("dark", value === "dark");
    theme.value = value;
}

// Save using Local Storage
function saveLocalStorage() {
    localStorage.setItem("theme", theme.value);
    sessionStorage.removeItem("theme");
    applyTheme(theme.value);
    message.innerText = "Theme saved in Local Storage!";
}

// Save using Session Storage
function saveSessionStorage() {
    sessionStorage.setItem("theme", theme.value);
    localStorage.removeItem("theme");
    applyTheme(theme.value);
    message.innerText = "Theme saved in Session Storage!";
}

// Clear Preferences
function clearPreferences() {
    localStorage.removeItem("theme");
    sessionStorage.removeItem("theme");
    applyTheme("light");
    message.innerText = "Preferences cleared!";
}

// Load Saved Theme
function loadTheme() {
    let saved = localStorage.getItem("theme") ||
                sessionStorage.getItem("theme") || "light";
    applyTheme(saved);
}

// Change Theme
theme.addEventListener("change", function() {
    applyTheme(theme.value);
    message.innerText = "Theme changed. Save your preference.";
});

// Load Theme on Page Start
loadTheme();
