var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

var userDisplay = document.getElementById("userDisplay");
var passDisplay = document.getElementById("passDisplay");
var navbarProject = document.getElementById("projectsNav");






navbarProject = document.createElement("i");
navbarProject.setAttribute("class", "fa-solid fa-bag-shopping");

// welcomeLabel.addEventListener("mouseover", function()
// {
// console.log("Event : mouseover");
// displayEvent.textContent = "Event : mouseover";

// });

// welcomeLabel.addEventListener("mouseout", function()
// {
// console.log("Event : mouseout");
// displayEvent.textContent = "Event : mouseout";

// });
// welcomeLabel.addEventListener("dblclick", function()
// {
// console.log("Event : dblclick");
// displayEvent.textContent = "Event : dblclick";

// });

function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        console.log(`Username: ${ x } \n Password: ${ y }`)
        userDisplay.textContent = x;
        passDisplay.textContent = y;
        return false;
    }
}