const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const header = document.querySelector("header");
const bgDiv = document.querySelector(".bg");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("click", outsideClick);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.remove("close");
    menu.classList.add("hide");
    bgDiv.classList.remove("bg-gray");
    document.body.style.overflow = "visible";

    showMenu = true;
  } else {
    menuBtn.classList.add("close");
    menu.classList.remove("hide");
    bgDiv.classList.add("bg-gray");
    document.body.style.overflow = "hidden";

    showMenu = false;
  }
}

function outsideClick(e) {
  if (e.target == header) {
    menuBtn.classList.add("close");
    menu.classList.remove("hide");
    menuNav.classList.remove("show");
    header.classList.add("bg-gray");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
