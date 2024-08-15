const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

/******************************Loading page***************** */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('section').style.animation = 'fadeIn 1.5s ease-in-out';
    const elements = document.querySelectorAll('.content-Acculille h1, .content-Acculille h3, .btn-accullie, .btn-accullie1');
    elements.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }, index * 500); // Delay each element's animation
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const article = document.querySelector('article');
    const imageSection = document.querySelector('.image-acullie');
    const contentSection = document.querySelector('.content');

    // Intersection Observer Options
    const options = {
        root: null, // Default is the viewport
        threshold: 0.1 // Animation starts when 10% of the section is visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imageSection.style.opacity = 1;
                imageSection.style.transform = 'translateX(0)';
                contentSection.style.opacity = 1;
                contentSection.style.transform = 'translateX(0)';
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Creating the observer
    const observer = new IntersectionObserver(callback, options);

    // Observing the article section
    observer.observe(article);
});


/**************************************** */
/**************************************** */


/*******************Card Slider************** */

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

/******************************************************************/ 
/******************************************************************/ 

/**********************Section 4 animation***************************/ 

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.container-sc4');
    hiddenElements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.containt-main');
    hiddenElements.forEach(el => observer.observe(el));
});



window.addEventListener("load", function () {
    document.querySelector(".loader").style.display = "none";
    document.getElementById("nav").style.display = "block";
    document.getElementById("section").style.display = "block";
    document.getElementById("article").style.display = "block";
    document.getElementById("section3").style.display = "block";
    document.getElementById("section4").style.display = "block";
    document.getElementById("section41").style.display = "block";
    document.getElementById("footer").style.display = "block";
});