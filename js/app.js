const size = 10;
const numOfCell = size ** 2;
const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");

buttonDomEl.addEventListener("click", function(){
    for(let i = 0; i < numOfCell; i++){
        const num = i + 1;
    
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
    
        gridDomEl.append(cellEl);
    
        cellEl.addEventListener("click", function(){
            console.log(num);
            cellEl.classList.toggle("bg-sky-blue")
        })
    }

})
