var up;
var down;

up = 
down = document.getElementById("button__down");


function hideSection () {
    document.getElementById("extend").style.display = "none";
  }

 function hideOptions () {
    document.getElementById("options").style.display = "none";
    document.getElementById("button__up").style.display = "block";
    down.style.display = "none";
    console.log("done");
}

function showOptions () {
    document.getElementById("options").style.display = "block";
    down.style.display = "block";
    up.style.display = "none";
    console.log("show done");
}