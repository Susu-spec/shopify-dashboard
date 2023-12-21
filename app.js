const text = document.querySelector(".nav__bar--text"),
      navList = document.querySelector(".nav"),
      popUp = document.getElementById("popup"),
      grids = document.querySelectorAll(".main__three--grid"),
      bell = document.querySelector(".bell"),
      notifBox = document.querySelector(".notif"),
      mainTwo = document.querySelector(".main__section--two");
      mainThree = document.querySelector(".main__three");
var strNum = document.getElementById("number").innerHTML,
    number = parseInt(strNum),
    segment = document.querySelector(".segment");


text.addEventListener("blur", () => {
  navList.classList.remove("nav--visible"); 
})

text.addEventListener("click", () => {
  navList.classList.toggle("nav--visible");
});

bell.addEventListener("blur", () => {
  notifBox.classList.remove("notif--visible");
  console.log("oop");
});

bell.addEventListener("click", () => {
  notifBox.classList.toggle("notif--visible");
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
    mainTwo.classList.toggle("border--up");
    mainThree.classList.toggle("border--down");
}

grids.forEach((grid) => {
  grid.addEventListener("click", function(event) {
    var icon = grid.querySelector(".icon");
    var button = grid.querySelector(".cust__button"); 

    button.addEventListener("click", () => {
      if (!icon.classList.contains("svg__rollout") && number >= 0) {
        icon.classList.add("svg__rollout");
        number++;
      }
    });

    icon.addEventListener("click", () => {
      if (icon.classList.contains("svg__rollout")) {
        icon.classList.remove("svg__rollout");
        number--;
        if (number < 0) {
          number = 0;
        }
      }
    });
    document.getElementById("number").innerHTML = number;
    segment.style.width = number + "rem";

    var allChildDivs = document.querySelectorAll('.main__three--p .main__three--sub');
    for (var i = 0; i < allChildDivs.length; i++) {
      allChildDivs[i].style.display = "none";
    }
    var clickedChildDiv = event.currentTarget.querySelector('.main__three--sub');
    clickedChildDiv.style.display = "block";
  });
});


