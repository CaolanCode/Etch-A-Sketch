const container = document.getElementById('container');

function makeSquares(size){
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for(let i = 0; i < (size * size); i++){
    let div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener("mouseover", changeColour);
    container.appendChild(div);
  }
}

function changeColour(event){
  event.target.style.backgroundColor = 'black';
}

function getGridSize(){
  let size = parseInt(prompt("Enter the grid size, 1-100:"));
  while(size > 100){
    size = parseInt(prompt("Please enter a number below 100:"));
  }
  makeSquares(size);
}

function clearScreen(){
  container.innerHTML = "";
}


