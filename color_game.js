var numOfSquares = 6;
var colors = getRandomColors(numOfSquares);
var messageDisplay = document.querySelector("#message");
var headClass = document.querySelector(".abc");
var grid = document.querySelectorAll(".grid");
var pickedcolor = pickcolor();
var display = document.querySelector("#display");
var newcolors = document.querySelector("#newcolors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function(){
  numOfSquares = 3;
  easy.classList.add("selected");
  hard.classList.remove("selected");
  colors = getRandomColors(numOfSquares);
  pickedcolor = pickcolor();
  display.textContent = pickedcolor;
  for(var i=0;i<grid.length;i++)
  {
    if(colors[i])
    {
      grid[i].style.background = colors[i];
    }
    else
    {
      grid[i].style.display = "none";
    }
  }
});
hard.addEventListener("click",function(){
  numOfSquares = 6;
  easy.classList.remove("selected");
  hard.classList.add("selected");
  colors = getRandomColors(numOfSquares);
  pickedcolor = pickcolor();
  display.textContent = pickedcolor;
  for(var i=0;i<grid.length;i++)
  {
    grid[i].style.background = colors[i];
    grid[i].style.display = "block";
  }
})
newcolors.addEventListener("click",function(){
  colors = getRandomColors(numOfSquares);
  pickedcolor = pickcolor();
  console.log(colors.length);
  display.textContent = pickedcolor;
  for(var i=0;i<grid.length;i++)
  {
    grid[i].style.background = colors[i];
  }
  headClass.style.background = "steelblue";
  newcolors.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
});
for(var i=0;i<grid.length;i++)
{
  grid[i].style.background = colors[i];
}
display.textContent = pickedcolor;
for(var i=0;i<grid.length;i++)
{
  grid[i].addEventListener("click",function(){
    var clickedcolor = this.style.background;
    if(clickedcolor == pickedcolor)
    {
      messageDisplay.textContent = "Correct";
      changeColor(clickedcolor);
      headClass.style.background = clickedcolor;
      newcolors.textContent = "Play Again?";
    }
    else
    {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}
function changeColor(color){
  for(var i=0;i<grid.length;i++)
  {
    grid[i].style.background = color;
  }
}
function pickcolor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function getRandomColors(num){
  var arr = [];
  for(var i=0;i<num;i++)
  {
    arr.push(giveColor());
  }
  return arr;
}
function giveColor()
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}