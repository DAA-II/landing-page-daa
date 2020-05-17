const buttonChangeTheme = document.getElementById("buttonChangeTheme"),
  body = document.body;

let [sun, moon] = Array.from(buttonChangeTheme.children);

const assignBodyStylesTheme = (isHide) => {
  if (isHide) {
    body.style.setProperty("--colorBackground", "#212121");
    body.style.setProperty("--colorTextPrimary", "#ffffff");
  } else {
    body.style.setProperty("--colorBackground", "#ffffff");
    body.style.setProperty("--colorTextPrimary", "#000000");
  }
};

buttonChangeTheme.addEventListener("click", () => {
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");

  assignBodyStylesTheme(sun.className.includes("hide"));
});
