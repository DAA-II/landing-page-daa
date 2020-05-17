//Función para obtener la distancia del elemento actual respecto al borde superior del nodo
export const getPositionElmenent = (nameElement) => {
  let element = document.querySelector(nameElement);

  return element.offsetTop;
};

//Función para remover clases a varios elementos
export const removesClass = (items, classNameRemove) => {
  items.map((item) => {
    item.classList.remove(classNameRemove);
  });
};
