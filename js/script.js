function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function onMenuClick() {
    var x = document.getElementById("navigation-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function search_animal() {
    // Get the value from the search bar and convert it to lowercase
    let input = document.getElementById('searchbar').value.toLowerCase();
    
    // Get all elements with the class 'box'
    let boxes = document.getElementsByClassName('box');
    let found = false; // Flag to check if any boxes match the search

    // Loop through all boxes
    for (let i = 0; i < boxes.length; i++) {
        // Get the title text and convert it to lowercase
        let title = boxes[i].getElementsByClassName('blog-title')[0];
        if (title) {
            title = title.innerHTML.toLowerCase();
        } else {
            title = ''; // If there's no title, treat it as empty
        }

        // Check if the title includes the input text
        if (title.includes(input)) {
            boxes[i].style.display = "block"; 
            found = true
        } else {
            boxes[i].style.display = "none"; // Hide the box if it doesn't match
        }
    }

    if (found) {
        document.getElementById('notFound').innerHTML = "";
    } else {
        document.getElementById('notFound').innerHTML = "No Search Result";
    }


}