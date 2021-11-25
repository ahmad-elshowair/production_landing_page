/* +++++++++++++++++++++ START GLOBAL VARIABLES +++++++++++++++++++++ */
const siteLinks = document.querySelectorAll("footer .site-map ul li a");
const navLinks = document.querySelectorAll(".page-wraper .navbar .nav-list li a");
const toggleButton = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav_menu").querySelectorAll("a");
const header = document.querySelector(".navbar");
const headerHeight = header.offsetHeight;
/* +++++++++++++++++++++ END GLOBAL VARIABLES +++++++++++++++++++++ */


// create function to go to specific part of the page
function goToSection(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// create function to add class class to the current element
function addActive(links) {
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(e => e.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

goToSection(navLinks);
goToSection(siteLinks);
addActive(links);

window.addEventListener("scroll", function () {
  if (!navList.classList.contains('open')) {
    header.classList.toggle("scrolled", window.scrollY > headerHeight + 10);
  }
});

// Start toggle nav list
toggleButton.addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  toggleButton.classList.toggle("clicked");
  navList.classList.toggle("open");
  if (header.classList.contains('scrolled'))
    header.classList.remove('scrolled');
});
// click anywhere to toggle the nav list
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target !== toggleButton && e.target !== navList) {
    if (navList.classList.contains("open"))
      toggleButton.classList.remove("clicked");
    navList.classList.remove("open");
  }
});

// stop propagation from the links menu
navList.onclick = function (e) {
  e.stopPropagation();
}

// End toggle nav list
