const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let useRandomColor = false;

function createGrid(numSquares) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < numSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = "white";
      let opacity = 1;
      let passes = 0;
      square.addEventListener("mouseover", () => {
        let r, g, b;
        if (useRandomColor) {
          r = Math.floor(Math.random() * 256);
          g = Math.floor(Math.random() * 256);
          b = Math.floor(Math.random() * 256);
        } else {
          r = g = b = 0;
        }
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        passes++;
        if (passes === 10) {
          return;
        }
        opacity -= 0.1;
        square.style.opacity = opacity;
      });      
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

createGrid(16); 

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  let numSquares = prompt("Enter the number of squares per side for the new grid (max: 100):");
  if (numSquares === null) {
    return;
  }
  numSquares = parseInt(numSquares);
  if (isNaN(numSquares) || numSquares <= 0 || numSquares > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  createGrid(numSquares);
});

const randomBtn = document.getElementById("random-btn");
randomBtn.addEventListener("click", () => {
  useRandomColor = !useRandomColor;
});