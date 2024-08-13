document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById(toggleButton.getAttribute('data-collapse-toggle'));

    toggleButton.addEventListener('click', () => {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('hidden');
    });
});

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function () { updateProgressBar() };

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

function search_story() {
    // Get the value from the search bar and convert it to lowercase
    let input = document.getElementById('searchbar').value.toLowerCase();

    // Get all elements with the class 'box'
    let boxes = document.querySelectorAll('[id^="box"]');
    let found = false; // Flag to check if any boxes match the search

    // Loop through all boxes
    boxes.forEach(box => {
        // Get the title from the data attribute and convert it to lowercase
        let title = box.getAttribute('data-title').toLowerCase();

        // Check if the title includes the input text
        if (title.includes(input)) {
            box.style.display = "block";
            found = true;
        } else {
            box.style.display = "none"; // Hide the box if it doesn't match
        }
    });

    // Update the 'notFound' element based on the search result
    document.getElementById('notFound').innerHTML = found ? "" : "No Search Result";
}