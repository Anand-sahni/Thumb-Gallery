const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// set first img opacity
imgs[0].style.opacity = opacity;

// short way of writting above two lines
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // change the image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // remove fade in class after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // change the opaacity var
    e.target.style.opacity = opacity;
}
