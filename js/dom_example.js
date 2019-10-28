// NO jQuery here!

// put DOM elements into easy variables
let bottom = document.querySelectorAll('.bottom');
// hide all the things
bottom.forEach(function(el) {
    el.classList.add('disappear');
    el.classList.add('toggle');
});

// put DOM elements into easy variables
let moreText = document.querySelectorAll('.more-text');
// hide all the things
moreText.forEach(function(el) {
    el.style.display = 'none';
});

// more variables
let clicker = document.querySelectorAll('.clicker');
let moreLink = document.querySelectorAll('.more-link');


// show brown DIV  when orange bar is clicked -
// put event listener on each clicker

clicker.forEach(function(el) {
    el.onclick = (e) => {

        // get parent section of the clicked div, then
        // find the brown div below the orange bar that was clicked
        let div = e.target.closest('section').querySelector('.bottom');

        // hide any open brown divs
        bottom.forEach(function(el) {
            if ( el !== div) {
                el.classList.add('disappear');
            }
        });

        // open or close the brown div below the orange bar that was clicked
        if ( div.classList.contains('disappear') ) {
            div.classList.remove('disappear');
        } else {
            div.classList.add('disappear');
        }

    } // end of onclick
});

// show and hide the "more" text - put event listener on each MORE

moreLink.forEach(function(el) {
    el.onclick = (e) => {
        const text = e.target;
        // toggle text
        if (text.textContent === " MORE ") {
            text.previousSibling.previousSibling.style.display = 'inline';
            text.textContent = " LESS ";
        } else {
            text.previousSibling.previousSibling.style.display = 'none';
            text.textContent = " MORE ";
        }
    } // end of onclick
});
