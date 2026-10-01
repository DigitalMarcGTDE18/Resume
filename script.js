(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-btn");
  var printBtn = document.getElementById("print-btn");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
    themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  printBtn.addEventListener("click", function () { window.print(); });
})();
