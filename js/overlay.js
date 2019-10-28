let firstClick = document.querySelector('#first-overlay');
let secondClick = document.querySelector('#second-overlay');
// note this gets ALL images with the class
let expImages = document.querySelectorAll('.expand-image');


// 1. full-screen dimmed (gray)
// spawn a DIV and make it cover the entire browser viewport
firstClick.onclick = () => {
    let fullScreen = document.createElement('div');
    // prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    fullScreen.classList.add('full-screen');
    document.body.append(fullScreen);
    // add listener to overlay for removing it
    fullScreen.onclick = () => {
        fullScreen.remove();
        // restore scrolling
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    }
}

// 2. centered orange text-box
// spawn a DIV and make it cover the entire browser viewport
// put another DIV inside that one (size will depend on text inside it)
// flex styles in CSS will center the orange text-box
secondClick.onclick = () => {
    let fullScreen = document.createElement('div');
    // create orange box
    let textBox = document.createElement('div');
    let textContent = document.createTextNode("This is some lovely text.");
    textBox.appendChild(textContent);
    fullScreen.appendChild(textBox);
    // prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    // put CSS on the new DIVs
    fullScreen.classList.add('full-screen-flex');
    textBox.classList.add('text-overlay');
    // add all to page
    document.body.append(fullScreen);
    // add listener to orange box for removing all added elements
    textBox.onclick = () => {
        fullScreen.remove();
        // restore scrolling
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    }
}

// 3. enlarged image
// spawn a DIV and make it cover the entire browser viewport
// put an expanded image inside it
// use forEach to make it work for ALL images on the page
expImages.forEach(function(el) {
    el.onclick = () => {
        let fullScreen = document.createElement('div');
        // get image file source from clicked image
        let imageSource = el.getAttribute('src');
        // create new large image
        let bigImage = document.createElement('img');
        // give bigImage the same src value as the clicked image
        bigImage.setAttribute('src', imageSource);
        fullScreen.appendChild(bigImage);
        // prevent scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        // put CSS on the DIV and the IMG
        fullScreen.classList.add('full-screen-flex');
        fullScreen.style.background = 'rgba(0, 0, 0, 0.7)';
        bigImage.classList.add('expanded');
        // add all to page
        document.body.append(fullScreen);
        // add listener to orange box for removing all added elements
        bigImage.onclick = () => {
            fullScreen.remove();
            // restore scrolling
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    }
});
