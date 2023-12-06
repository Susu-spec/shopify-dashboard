const initials = document.querySelector(".nav__bar--initials");
const navList = document.querySelector(".nav__list");
const primary = document.querySelector(".nav__list--primary");
const secondary = document.querySelector(".nav__list--secondary");
const event = document.getElementsByClassName("main__three--p");
var strNum = document.getElementById("number").innerHTML;
var number = parseInt(strNum);
var segment = document.querySelector(".segment");
const icons = document.querySelectorAll(".icon");
const bell = document.querySelector(".bell");
const notifBox = document.querySelector(".notif__box");
const buttons = document.getElementsByTagName('button');

initials.addEventListener("click", () => {
  navList.classList.toggle("nav__list--visible");
  primary.style.display = "block";
  secondary.style.display = "block";
});

bell.addEventListener("click", () => {
  notifBox.classList.toggle("notif__box--visible");
  document.querySelector(".notif").style.display = "block";
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

function handleClick(event) {
    var allChildDivs = document.querySelectorAll('.main__three--p .main__three--sub');
    for (var i = 0; i < allChildDivs.length; i++) {
      allChildDivs[i].style.display = "none";
    }
    var clickedChildDiv = event.currentTarget.querySelector('.main__three--sub');
    clickedChildDiv.style.display = "block";
  }

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    void icon.offsetWidth;
    if (icon.classList.contains("svg__rollout")) {
      icon.classList.remove('svg__rollout');
      number--;
      if(number < 0) {
        number = 0;
      }
      console.log(number); 
    } else {
      icon.classList.add('svg__rollout');
      number++;
    }
    document.getElementById("number").innerHTML = number;
    segment.style.width = number + "rem";
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.ariaPressed = "true";
  });
});