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
    segment = document.querySelector(".segment"),
    btn = document.querySelector(".back-to-top"),
    body = document.body,
    docElem = document.documentElement, //<html> root of page rendered
    offset = 100,
    scrollPos, docHeight; 

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != undefined) {
  offset = docHeight / 4;
  console.log(offset);
}

//window equals browser tab
window.addEventListener("scroll", function(event) {
  scrollPos = body.scrollTop || docElem.scrollTop; //scrolltop = total number of pixels element is scrolled vertically - distance from element's top to its topmost visible content
  console.log(scrollPos);

  (scrollPos > offset ) ? btn.classList.add("visible") : btn.classList.remove("visible");

});

//setTimeout() => delay
btn.addEventListener("click",() => {
    body.scrollTop = 0;
    docElem.scrollTop = 0;

});


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
    mainTwo.classList.remove("border--up");
    mainThree.classList.remove("border--down"); 
}

function showOptions () {
    document.getElementById("options").style.display = "block";
    document.getElementById("button__up").style.display = "none";
    document.getElementById("button__down").style.display = "block";
    mainTwo.classList.add("border--up");
    mainThree.classList.add("border--down");
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


/**TODO: Add smooth scroll animation */


