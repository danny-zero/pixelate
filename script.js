const grid = document.querySelector('.grid');

// for (let i = 0; i < 64; i++) {
//     // const div = document.createElement("DIV");
//     // div.setAttribute("class", "square");
//     // grid.appendChild(div);

//     grid.innerHTML += `<div class="square"</div>`;
// }

const width = Math.floor(grid.offsetWidth / 50)
console.log(width)

const addRowBtn = document.querySelector('#addRow')

// let counter = 0;
// addRowBtn.addEventListener("click", () => {
//     counter++
//     if (counter <= 100) {
//         for (let i = 0; i < width; i++) {
//             grid.innerHTML += `<div class="square gray"</div>`;
//         }
//     } else {
//         alert('Stop it!!!!!!')
//     }
    
// })

addRowBtn.addEventListener("click", () => {
    for (let i = 0; i < width; i++) {
        grid.innerHTML += `<div class="square gray"</div>`;
    }  
})

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", () => {
    // location.reload();
    [...document.querySelectorAll('.square')].forEach((square) => {
        square.style.backgroundColor = "gray"
    });
})



const selectColor = document.querySelector("#selectColor");

let mouseIsDown = false

grid.addEventListener('mousedown', () => {
  mouseIsDown = true
  })
grid.addEventListener('mouseup', () => {
  mouseIsDown = false
  })

grid.addEventListener("mousemove", (event) => {
  if (event.target.classList.contains('square') && mouseIsDown === true) {
    event.target.style.backgroundColor = selectColor.value;
  }
})


const reloadBtn = document.querySelector("#reload");
reloadBtn.addEventListener("click", () => {
    location.reload();
})

const removeBtn = document.querySelector("#remove");
removeBtn.addEventListener("click", () => {
    for (let i = 0; i < width; i++) {
        grid.removeChild(grid.childNodes[grid.childNodes.length - 1]);
    } 
})