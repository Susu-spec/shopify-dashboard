
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
var event = document.getElementsByClassName("main__three--p");

function handleClick(event) {
    // Hide all child divs in all parent divs
    var allChildDivs = document.querySelectorAll('.main__three--p .main__three--sub');
    for (var i = 0; i < allChildDivs.length; i++) {
      allChildDivs[i].style.display = "none";
    }

    // Show the child div inside the clicked parent div
    var clickedChildDiv = event.currentTarget.querySelector('.main__three--sub');
    clickedChildDiv.style.display = "block";
  }

var str_Num = document.getElementById("number").innerHTML;
console.log(str_Num);
var number = parseInt(str_Num);
console.log(number);
var line = document.querySelector(".line");
var segment = document.querySelector(".segment");

/**
 * trigger animation, set up event listener, execute function (chaange NUMBER)
 * if load is clicked,
 * i will be stored in number and a property of segment will increase - width - 
 */

