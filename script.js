//Page load Animation
// const loadScreen = document.querySelector(".load-screen");
// const wrapper = document.querySelector(".wrapper");

// function init() {
//   setTimeout(() => {
//     loadScreen.style.display = "none";
//     loadScreen.style.opacity = 0;

//     wrapper.style.display = "grid";
//     wrapper.style.opacity = 1;

//     setTimeout(() => (wrapper.style.opacity = 1), 50);
//   }, 2000);
// }

// init();

//Navbar animation
const nav = document.querySelector("#navbar");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("#navbar").querySelectorAll(".nav-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("#navbar").querySelectorAll(".nav-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
  }
});

//Dark Mode
const toggle = function () {
  document.body.classList.toggle("dark");
};

document.querySelector("input").addEventListener("click", toggle);
