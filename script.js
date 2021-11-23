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

const siteLinks = document.querySelectorAll("footer .site-map ul li a");
const navLinks = document.querySelectorAll(
  ".page-wraper header .nav-list li a"
);
goToSection(navLinks);
goToSection(siteLinks);

const links = document.querySelector("#nav-bar").querySelectorAll("a");
addActive(links);


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  header.classList.toggle("scrolled", window.scrollY > headerHeight + 10);
});


// Start toggle nav list 
const toggleButton = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-list")

toggleButton.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("clicked");
  navList.classList.toggle("open");
}
// click anywhere to toggle the nav list
document.addEventListener("click", (e) => {
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
