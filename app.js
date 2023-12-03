const initials = document.querySelector(".nav__bar--initials");
const navList = document.querySelector(".nav__list");
const event = document.getElementsByClassName("main__three--p");
var strNum = document.getElementById("number").innerHTML;
var number = parseInt(strNum);
var segment = document.querySelector(".segment");
const icons = document.querySelectorAll(".icon");

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

function handleClick(event) {
    var allChildDivs = document.querySelectorAll('.main__three--p .main__three--sub');
    for (var i = 0; i < allChildDivs.length; i++) {
      allChildDivs[i].style.display = "none";
    }
    var clickedChildDiv = event.currentTarget.querySelector('.main__three--sub');
    clickedChildDiv.style.display = "block";
  }

function addClass() {
  icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      if (icon.classList.contains("svg__rollout")) {
        icon.classList.remove('svg__rollout');
        number--;
        if(number < 0) {
          number = 0;
        }
        console.log(number); 
      } else {
        icon.classList.add('svg__rollout');
        void icon.offsetWidth;
        number++;
      }
      document.getElementById("number").innerHTML = number;
      segment.style.width = number + "rem";
    });
  });
}
