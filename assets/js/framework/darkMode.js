const darkModeSwitches = document.querySelectorAll(".dark-mode-switch");

if (darkModeSwitches) {
  darkModeSwitches.forEach((item) => {
    item.addEventListener("click", () => {
      darkModeSwitches.forEach((item) => item.classList.add("animated"));
      toggleDarkMode();
    });
  });
}

const preventTransitionCSS = () => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(
    document.createTextNode(
      `* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
            }`
    )
  );
  return css;
};

function setLight() {
  const css = preventTransitionCSS();
  document.head.appendChild(css);
  document.documentElement.setAttribute("data-bs-theme", "light");
  localStorage.setItem("darkMode", false);
  darkModeSwitches.forEach((item) => item.classList.add("light"));
  darkModeSwitches.forEach((item) => item.classList.remove("dark"));
  const _ = window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

function setDark() {
  const css = preventTransitionCSS();
  document.head.appendChild(css);
  document.documentElement.setAttribute("data-bs-theme", "dark");
  localStorage.setItem("darkMode", true);
  darkModeSwitches.forEach((item) => item.classList.add("dark"));
  darkModeSwitches.forEach((item) => item.classList.remove("light"));
  const _ = window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

function toggleDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    setLight();
  } else {
    setDark();
  }
}

function initDarkMode() {
  // First use user setting
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
    return;
  }
  if (darkMode === "false") {
    darkModeSwitches.forEach((item) => item.classList.add("light"));
    return;
  }

  // Otherwise lookup system setting and make this the user setting
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDark();
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
  }
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    setLight();
    darkModeSwitches.forEach((item) => item.classList.add("light"));
  }
}

initDarkMode();
