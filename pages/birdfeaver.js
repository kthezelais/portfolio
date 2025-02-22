document.addEventListener('DOMContentLoaded', function() {
    bird = document.getElementsByTagName('img')[0];
    let deg = 0;

    const intervalId = setInterval(() => {
        deg += 5;
        if (deg > 360) {
            deg = 0;
        }

        bird.style.transform = 'rotate(' + deg + 'deg)';
    }, 15);
});
