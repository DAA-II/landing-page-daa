import { getPositionElmenent } from "../helpers/dom.helper.js";
import { activeItemMenuByPositionScroll, assignClassToMenu } from "./sticky.js";

const menu = document.getElementById("menu"),
  sticky = menu.offsetTop;

const itemsMenu = Array.from(document.querySelectorAll(".navbar-site__item"));

//Menu sticky
window.addEventListener("scroll", (e) => {
  activeItemMenuByPositionScroll(window.scrollY, itemsMenu);
  assignClassToMenu(menu, sticky);
});

//Posicionar el scroll en lo alto de una sección al darle click al menu
const postionScrollInSection = (e) => {
  let element = e.dataset["section"];
  window.scrollTo(0, getPositionElmenent(`.${element}`));
};

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    postionScrollInSection(e.target);
  }
});
