const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

/******************************************************************** */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.form, .contact-info');
    hiddenElements.forEach(el => observer.observe(el));
});


/*********************************Validation Form *************************************/

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;

    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const phone = document.querySelector("input[name='phone']");
    const message = document.querySelector("textarea[name='message']");

    if (name.value.trim() === "") {
        isValid = false;
        name.classList.add("error");
    } else {
        name.classList.remove("error");
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        isValid = false;
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    if (phone.value.trim() === "") {
        isValid = false;
        phone.classList.add("error");
    } else {
        phone.classList.remove("error");
    }

    if (message.value.trim() === "") {
        isValid = false;
        message.classList.add("error");
    } else {
        message.classList.remove("error");
    }

    if (isValid) {
        this.submit();
    }
});
