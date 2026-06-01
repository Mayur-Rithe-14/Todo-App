const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");

  if (themeToggle) {
    themeToggle.innerHTML = "☀️";
  }
}

// Toggle Theme
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");

      themeToggle.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");

      themeToggle.innerHTML = "🌙";
    }
  });
}
