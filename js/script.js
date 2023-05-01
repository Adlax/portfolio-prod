///////////////////////////////////////////////////////////////////////////// DARK THEME ///////////////////////////////////////////////////////////////////////////////////
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVIOUSLY SELECTED TOPIC (from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// GET THE CURRENT THEME THAT THE UI HAS BY VALID THE DARK THEME CLASS 
const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? "dark" : "light";
}

const getCurrentIcon = () => {
    return document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
}

// CHECK IF USER HAD ALREADY CHOSEN A TOPIC  
if(selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// TOGGLE THE THEME MANUALLY 
themeButton.addEventListener("click", () => {
    console.log("Passing here");
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

///////////////////////////////////////////////////////////////////////////// MENU ///////////////////////////////////////////////////////////////////////////////////

// MENU SHOW HIDDEN 
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// MENU SHOW 
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// MENU HIDE  
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// MENU REMOVE 
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(link => link.addEventListener("click", linkAction));

///////////////////////////////////////////////////////////////////////////// TypeWriter Effect /////////////////////////////////////////////////////////////////////////

new Typewriter("#typewriter", {
    strings: ["Hadley", "Web Developer", "Front-End Developer", "And a bit Full-Stacker too ;)"],
    autoStart: true,
    loop: true,
    cursor: "|",
});


///////////////////////////////////////////////////////////////////////////// Portfolio Swiper /////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
        invert: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});

///////////////////////////////////////////////////////////////////////////// SCROLL SYSTEM /////////////////////////////////////////////////////////////////////////
function scrollUp() {
    const scrollup = document.getElementById("scroll-up");
    if(this.scrollY >= 560) {
        scrollup.classList.add("show-scroll");
    }
    else {
        scrollup.classList.remove("show-scroll");
    }
};

window.addEventListener("scroll", scrollUp);

// console.log(themeButton);
console.log("Script Launched");

///////////////////////////////////////////////////////////////////////////// ACTIVE SECTION STYLING /////////////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll("section[id]");

function scrollActive () {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);