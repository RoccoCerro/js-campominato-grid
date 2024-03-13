const size = 10;
const numOfCell = size ** 2;
const gridDomEl = document.querySelector(".grid");

for(let i = 0; i < numOfCell; i++){
    const num = i + 1;

    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.innerHTML = num;

    gridDomEl.append(cellEl);

    
}
