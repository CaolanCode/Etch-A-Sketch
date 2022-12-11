const container = document.getElementById('container');

function makeCols(size){
  for(let i = 0; i < size; i++){
    let column = document.createElement('div');
    container.appendChild(column);
  }
}

makeCols(16);