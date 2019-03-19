var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
//Gets all of the square divs from HTML
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var chosenColor = chooseColor();
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  chosenColor = chooseColor();
  colorDisplay.textContent = chosenColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = 'none';
    }
  }
})

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  chosenColor = chooseColor();
  colorDisplay.textContent = chosenColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
})

//Reset Game
resetButton.addEventListener('click', function(){
  //When click button, Generate all new colours
  colors = generateRandomColors(numberOfSquares);
  //Pick a new random colour from array
  chosenColor = chooseColor();
  //Change colorDisplay to match chosen colour
  colorDisplay.textContent = chosenColor;
  //When click 'Play Again button' the correct/wrong message disappears
  messageDisplay.textContent = '';
  //Change colours of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#3C635B';
})

colorDisplay.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
  //Loop through each square assigning it the color array given
  squares[i].style.backgroundColor = colors[i]
  //Add click listeners to the squares
  squares[i].addEventListener('click', function(){
  //Get the colour of the clicked square
  var clickedColor = this.style.backgroundColor;
  //Compare colour to chosenColor
  if (clickedColor === chosenColor) {
    messageDisplay.textContent = 'Correct!';
    resetButton.textContent = 'Play Again?'
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
  }else{
    this.style.backgroundColor = '#232323';
    messageDisplay.textContent = 'Wrong! Try Again';
  }
  });
}

function changeColors(colors){
  //Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //Change each square colour to match correct square colour
    squares[i].style.backgroundColor = colors;
  }
}

function chooseColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //Create array
  var arr = [];
  //Repeat num times
  for (var i = 0; i < num; i++) {
    //Get random colour & push into array
    arr.push(randomColors())
  }
  //Return array at end
  return arr;
}

function randomColors(){
  //Pick a RED from 0 - 255
  var red = Math.floor(Math.random() * 256);
  //Pick a GREEN from 0 - 255
  var green = Math.floor(Math.random() * 256);
  //Pick a BLUE from 0 - 255
  var blue = Math.floor(Math.random() * 256);

  return 'rgb(' +  red + ', ' + green + ', ' + blue + ')'

}
