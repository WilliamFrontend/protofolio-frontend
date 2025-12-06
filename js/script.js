// Show and hide menu
const button = document.querySelector("#menu-btn")

button.addEventListener("click", function showMenu() {
    const menu = document.querySelector("#menu");

    if(menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none'
    }

});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function () {
        
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        console.log("targetElement");

    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });

//     });
// });

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' : navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)'
});