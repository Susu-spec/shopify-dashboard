let up;
let down;
let upStyle;
let downStyle;

up = document.querySelector(".button__up");
down = document.querySelector(".button__down");
upStyle = getComputedStyle("up");
downStyle = getComputedStyle("down");


function hideSection () {
    document.getElementById("extend").style.display = "none";
  }

 function hideOptions () {
    document.getElementById("options").style.display = "none";
    upStyle.display = "block";
    downStyle.display = "none";
    console.log("done");
}

function showOptions () {
    document.getElementById("options").style.display = "block";
    downStyle.display = "block";
    upStyle.display = "none";
    console.log("show done");
}