const grid = document.querySelector('.grid');

// for (let i = 0; i < 64; i++) {
//     // const div = document.createElement("DIV");
//     // div.setAttribute("class", "square");
//     // grid.appendChild(div);

//     grid.innerHTML += `<div class="square"</div>`;
// }

const width = Math.floor(grid.offsetWidth / 50)
console.log(width)

let counter = 0;
const addRowBtn = document.querySelector('#addRow')
addRowBtn.addEventListener("click", () => {
    counter++
    if (counter <= 100) {
        for (let i = 0; i < width; i++) {
            grid.innerHTML += `<div class="square gray"</div>`;
        }
    } else {
        alert('Stop it!!!!!!')
    }
    
})

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", () => {
    location.reload();
})



const selectColor = document.querySelector("#selectColor");
grid.addEventListener("click", (event) => {
    console.log(selectColor.value);
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = selectColor.value;
        event.target.classList.remove("gray")
    }
})