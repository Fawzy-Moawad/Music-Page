const title = document.querySelector('h1');

function animateTitle() {
    title.style.fontSize = '36px';
    setTimeout(() => {
        title.style.fontSize = '24px';
    }, 1000);
}

setInterval(animateTitle, 2000);