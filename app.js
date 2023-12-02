const initials = document.querySelector(".nav__bar--initials");
const navList = document.querySelector(".nav__list");

initials.addEventListener("click", () => {
  navList.classList.toggle("nav__list--visible");
});

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
    var allChildDivs = document.querySelectorAll('.main__three--p .main__three--sub');
    for (var i = 0; i < allChildDivs.length; i++) {
      allChildDivs[i].style.display = "none";
    }
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
 * trigger animation, set up event listener, execute function (chaange NUMBER.)
 * if load is clicked,
 * set each icon to display block then none within 2s until checked
 * add transition class, remove transition class
 * i will be stored in number and a property of segment will increase - width - 
 */



