"use strict"

function someFunction(target){
  
};

window.onresize = resizeGrid;

window.onload = function () {
  let grid = document.getElementById("grid");
  
  for (let y = 0; y < worldSizeProps.grid.col; y++) {
      for (let x = 0; x < worldSizeProps.grid.rows; x++) {
          let div = document.createElement("div");
          div.classList.add("tile");
          div.setAttribute("id", `${x}-${y}`);
          div.setAttribute("onclick", "someFunction(this)");
          div.style.width = div.style.height = `${worldSizeProps.defaultTileSize}px`;
          grid.appendChild(div);
      };
  };

  resizeGrid();
};

function resizeGrid(){
  let h =  window.innerHeight;
  let w = window.innerWidth;

  if(w <  500){
    loopadAndResize(worldSizeProps.defaultTileSize-30);
  }else if(w <  900 || h < 400){
    loopadAndResize(worldSizeProps.defaultTileSize-20);
  }else{
    loopadAndResize(worldSizeProps.defaultTileSize);
  };
  grid.style.width = `${worldSizeProps.grid.col * worldSizeProps.tileSize}px`;
  grid.style.height = `${worldSizeProps.grid.rows * worldSizeProps.tileSize}px`;
};

function loopadAndResize(f){
  worldSizeProps.tileSize = f;
  let e = document.getElementsByClassName("tile");
  for(let i = 0; i < e.length; i++){
    e[i].style.width = e[i].style.height = `${worldSizeProps.tileSize}px`;
  };
};