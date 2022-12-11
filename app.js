const container = document.getElementById('container');
let counter = 1;

function makeSquares(size){
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for(let i = 0; i < (size * size); i++){
    let div = document.createElement('div');
    div.classList.add('box');
    div.innerText = counter;
    div.addEventListener("mouseover", changeColour);
    container.appendChild(div);
    counter += 1;
  }
}

function changeColour(event){
  event.target.style.backgroundColor = 'black';

}

makeSquares(16);