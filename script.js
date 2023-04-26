const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

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
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

createGrid(16); // default

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