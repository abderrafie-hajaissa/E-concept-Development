const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

/******************************************************************* */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.5 // Adjust this to trigger the animation earlier or later
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

/*************************************************************************** */


document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.content-demista');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('visible');
        }
    });
});
