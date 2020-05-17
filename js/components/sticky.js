import { getPositionElmenent, removesClass } from "../helpers/dom.helper.js";

//Función para agregar la clase sticky al menú.
export const assignClassToMenu = (menu, sticky) => {
  if (window.pageYOffset >= sticky) {
    return menu.classList.add("sticky");
  }

  return menu.classList.remove("sticky");
};

let descriptionContent = getPositionElmenent(".description-content") - 100;
let impactMapping = getPositionElmenent(".impact-mapping") - 100;
let containerTeam = getPositionElmenent(".container-team") - 100;

export const activeItemMenuByPositionScroll = (positionScroll, itemsMenu) => {
  if (positionScroll > 0) {
    removesClass(itemsMenu, "menu-active");
    itemsMenu[1].classList.add("menu-active");
  }

  if (positionScroll >= descriptionContent && positionScroll < impactMapping) {
    removesClass(itemsMenu, "menu-active");
    itemsMenu[0].classList.add("menu-active");
  }

  if (positionScroll > containerTeam) {
    removesClass(itemsMenu, "menu-active");
    itemsMenu[2].classList.add("menu-active");
  }
};
