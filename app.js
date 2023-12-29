const text = document.querySelector(".nav__bar--text"),
      navList = document.querySelector(".nav"),
      popUp = document.getElementById("popup"),
      grids = document.querySelectorAll(".main__three--grid"),
      bell = document.querySelector(".bell"),
      notifBox = document.querySelector(".notif"),
      targetInput = document.getElementById("Search"),
      mainTwo = document.querySelector(".main__section--two"),
      mainThree = document.querySelector(".main__three");
var strNum = document.getElementById("number").innerHTML,
    options = document.getElementById("options"),
    down = document.getElementById("button__down"),
    up = document.getElementById("button__up"),
    extend = document.getElementById("extend"),
    number = parseInt(strNum),
    segment = document.querySelector(".segment"),
    autoComplete = document.getElementById("auto-complete"),
    btn = document.querySelector(".back-to-top"),
    body = document.body,
    docElem = document.documentElement, //<html> root of page rendered
    offset = 100,
    scrollPos, docHeight,
    matches = [],
    searchResults = ['Bag', 'Cart', 'Centipede', 'Mizu', 'Akemi', 'Teigen', 'Rendezvous', 'Kareem', 'Rick', 'Morty']; 

//DOCUMENT SET FUNCTIONS//
targetInput.focus();
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != undefined) {
  offset = docHeight / 4;
}

//window equals browser tab
window.addEventListener("scroll", function(event) {
  scrollPos = body.scrollTop || docElem.scrollTop; //scrolltop = distance from element's top to its topmost visible content
  console.log(scrollPos);

  (scrollPos > offset ) ? btn.classList.add("visible") : btn.classList.remove("visible");

});

//setTimeout() => delay

/**
 *  window.scrollTo({ top: 0, behavior: 'smooth' }));
 */

//EVENT LISTENERS
btn.addEventListener("click", () => {
    body.scrollTop = 0;
    docElem.scrollTop = 0;
});

text.addEventListener("blur", () => {
  navList.classList.remove("nav--visible");
  reduce(navList);
})

text.addEventListener("click", () => {
  if (navList.classList.contains("nav--visible")) {
    reduce(navList);
    navList.classList.remove("nav--visible");
  }
  else {
    navList.classList.add("nav--visible");
    grow(navList);
  }
});

bell.addEventListener("blur", () => {
  notifBox.classList.remove("notif--visible");
  reduce(notifBox);
});

bell.addEventListener("click", () => {
  if (notifBox.classList.contains("notif--visible")) {
    reduce(notifBox);
    notifBox.classList.remove("notif--visible");
  }
  else {
    notifBox.classList.add("notif--visible");
    grow(notifBox);
  }
});


//FUNCTION DECLARATIONS//
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function grow(element) {
  element.classList.add("growAnimation");
}

function reduce(element) {
  element.classList.remove("growAnimation");
}
  
function hideSection() {
    hide(extend);
}

function hideOptions() {
    hide(options);
    hide(down);
    show(up);
    mainTwo.classList.remove("border--up");
    mainThree.classList.remove("border--down"); 
}

function showOptions () {
    show(options);
    grow(options);
    hide(up);
    show(down);
    mainTwo.classList.add("border--up");
    mainThree.classList.add("border--down");
}

grids.forEach((grid) => {
  grid.addEventListener("click", function(event) {
    var icon = grid.querySelector(".icon");
        button = grid.querySelector(".cust__button");
        clickedChildDiv = event.currentTarget.querySelector('.main__three--sub');
        allChildDivs = document.querySelector('.main__three--p .main__three--sub'); 

    document.getElementById("number").innerHTML = number;
    segment.style.width = number + "rem";

    if (!(icon.classList.contains("svg__rollout"))) {
      for (var i = 0; i < allChildDivs.length; i++) {
        allChildDivs[i].style.display = "none";
      }
    }
    show(clickedChildDiv);

    if (event.target === icon) {
      if (clickedChildDiv.style.display === "block") {
        hide(clickedChildDiv);
        reduce(grid);
      }
    }
    else {
      show(clickedChildDiv);
      grow(grid);
    }

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
    if ((icon.classList.contains("svg__rollout")) && (clickedChildDiv.style.display === "block")) {
      if (clickedChildDiv.style.display === "block") {
        hide(clickedChildDiv);
        reduce(clickedChildDiv);
      }
      var el = grid.nextElementSibling;
      el.querySelector('.main__three--sub').style.display = "block";
      grow(el);
    }
  });
});



/**
 * if action passed into toggle function is hide 
 */
/**
 * function toggleResults(action) {
  if (action = "show") {
    document.querySelector(".autoComplete").classList.add("visible");
  }
  else if (action = "hide") {
    document.querySelector(".autoComplete").classList.remove("visible");
  }
}

targetInput.addEventListener("keyup", function(event) {
  autoComplete.innerHTML = "";
  toggleResults("hide");

  if (this.value.length > 0) {
    console.log(this.value);
    match = getMatches(this.value);
    console.log(match.length);
    if (match.length > 0) {
      displayMatches(match);      
    } 
  }
  //Issue: Retrace
  else if (this.value.length <= 0) {
    toggleResults("hide");
    console.log("hey");
  }
});

function getMatches( inputText ) {
  var matchList = [];

  for ( var i = 0; i < searchResults.length; i++ ) {
    if (searchResults[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1 ) {
      matchList.push(searchResults[i]);
    }
  }

  for (var i = 0; i < matchList.length; i++) {
    console.log("Match " + (i + 1) + ":", matchList[i]);
  }

  return matchList;
}

function displayMatches(matchList) {
  console.log(matchList.length);
  var i = 0;

  while (i < matchList.length) {
    document.getElementById("auto-complete").innerHTML += '<li>' + matchList[i] + '</li>';
    i++;
  }

  toggleResults("show");
}
**/



