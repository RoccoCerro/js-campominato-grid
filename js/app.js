let size = 10;
let numOfCell = size ** 2;
const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");
const selectDomEl = document.getElementById("select-difficulty");

buttonDomEl.addEventListener("click", function(){
    const selectDomElValue = selectDomEl.value;
    
    if(selectDomElValue === "medium"){
        size = 9;
        numOfCell = size ** 2;
    }
    else if(selectDomElValue === "easy"){
        size = 7;
        numOfCell = size ** 2;
    }
    
    for(let i = 0; i < numOfCell; i++){
        const num = i + 1;
    
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
    
        gridDomEl.append(cellEl);

        if(selectDomElValue === "medium"){
            cellEl.classList.add("size-medium");
        }
        else if(selectDomElValue === "easy"){
            cellEl.classList.add("size-easy");
        }
    
        cellEl.addEventListener("click", function(){
            console.log(num);
            cellEl.classList.toggle("bg-sky-blue");
        })
    }
})

// function whereIsTheDifficulty(select){
//     if(select === "medium"){
//         return "medium"
//     }
//     else if(select === "easy"){
//         return "easy"
//     }
// }
