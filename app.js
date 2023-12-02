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
var segment = document.querySelector(".segment");
const icons = document.querySelectorAll(".icon");
let index = 0;


icons.forEach((icon, number) => {
  icon.addEventListener('click', () => {
  if (icon.classList.contains(".svg__rollout")) {
    icon.classList.remove('svg__rollout');
    number--;
    console.log(number);
    if (number === 0){
      number = 1;
    }
    document.getElementById("number").innerHTML = number;
    segment.style.width = number + "rem";
  } else {
      icon.classList.add('svg__rollout');
      number++;
      document.getElementById("number").innerHTML = number;
      segment.style.width = number + "rem";
    }
})
});
