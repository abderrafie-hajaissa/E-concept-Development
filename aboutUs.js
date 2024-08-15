const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


/********************************************************************************** */
window.addEventListener("scroll", function() {
    var section1Content = document.querySelector(".content-About");
    var section1Position = section1Content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (section1Position < screenPosition) {
        section1Content.classList.add("show-content");
    }
});
/**********************************************************************************/

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.content-about');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if(elementPosition < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
});
