const main = document.getElementById('container');
let squares = 4096;
const newDiv = document.createElement("div"); 

function initial(numOfSquares){


  
  for(let i = 0; i < numOfSquares; i++)
{
  let newDiv = document.createElement("div");
  newDiv.classList.add("pixel");

  newDiv.classList.remove("drawOn");
  newDiv.classList.add("drawOff");

  newDiv.addEventListener("mouseover", function () {
    newDiv.classList.remove("drawOff");
    
    newDiv.classList.add("drawOn");
    newDiv.style.backgroundColor = random_rgba();
  });
   main.appendChild(newDiv);

  let size = document.querySelectorAll("div.pixel");

  size[i].style.height= 960 / Math.sqrt(squares) + "px";
  size[i].style.width = 960 / Math.sqrt(squares)  + "px";
  
}
};


initial(squares);
let btn = document.querySelector("#btn").addEventListener('click', function (){
  clearGrid();
    squares = prompt("Enter number of rows");
    squares *= squares;


  initial(squares);
});

initial();

function clearGrid() {
  const gridArray = Array.from(main.childNodes);
  gridArray.forEach((element) => {
    main.removeChild(element);
  });
}

46

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();