"use strict"

window.onload = function () {
  let grid = document.getElementById("grid");

  grid.style.width = `${worldSizeProps.grid.col * worldSizeProps.pixelSize}px`;
  grid.style.height = `${worldSizeProps.grid.rows * worldSizeProps.pixelSize}px`;

  for (let y = 0; y < worldSizeProps.grid.col; y++) {
      for (let x = 0; x < worldSizeProps.grid.rows; x++) {
          let div = document.createElement("div");
          div.classList.add("tile");
          div.setAttribute("id",  x + "-" + y);
          div.setAttribute("onclick", "someFunction(this)");
          grid.appendChild(div);
      };
  };
};

function someFunction(target){
  
};