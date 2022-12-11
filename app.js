const container = document.getElementById('container');
let counter = 1;
let htmlText = "";

function makeSquares(size){
  for(let i = 0; i < size; i++){
    htmlText += '<div class="box">' + counter + '</div>';
    counter += 1;
  }
  container.innerHTML = htmlText;
}

makeSquares(256);