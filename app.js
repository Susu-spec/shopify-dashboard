
function hideSection () {
    document.getElementById("extend").style.display = "none";
  }

 function hideOptions () {
    document.getElementById("options").style.display = "none";
    document.getElementById("button__up").style.display = "block";
    document.getElementById("button__down").style.display = "none";
}

function showOptions () {
    document.getElementById("options").style.display = "block";
    document.getElementById("button__up").style.display = "none";
    document.getElementById("button__down").style.display = "block";
}