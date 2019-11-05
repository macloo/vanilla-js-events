// NO jQuery here! v2 requires slideToggle.js - 2k file

// put DOM elements into easy variables
let bottom = document.querySelectorAll('.bottom');
let moreText = document.querySelectorAll('.more-text');
let clicker = document.querySelectorAll('.clicker');
let moreLink = document.querySelectorAll('.more-link');


// hide all the things
bottom.forEach(function(el) {
    // function from slideToggle.js - 0 duration
    slideUp(el, 0);
});

moreText.forEach(function(el) {
    el.style.display = 'none';
});


// show brown DIV  when orange bar is clicked -
// put event listener on each clicker
clicker.forEach(function(el) {
    el.onclick = (e) => {

        // get parent section of the clicked orange bar, then
        // find the brown div below that orange bar
        let div = e.target.closest('section').querySelector('.bottom');
        // function from slideToggle.js
        slideToggle(div, 300);

        // hide any open brown divs
        bottom.forEach(function(el) {
            if (el !== div && el.style.display === 'block') {
                // function from slideToggle.js
                slideUp(el, 300);
            }
        });

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
