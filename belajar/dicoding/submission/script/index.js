document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar');

    document.querySelector('#nav-menu').addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const dropdown = document.querySelector('#nav-menu');
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
});

const sliderImages = document.querySelectorAll('.slider img');
const overlay = document.getElementById('overlay');

sliderImages.forEach(image => {
    image.addEventListener('click', () => {
        sliderImages.forEach(img => img.classList.remove('clicked')); 
        image.classList.add('clicked'); 
        overlay.textContent = image.alt;
        overlay.style.display = 'block';

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000);
    });
});